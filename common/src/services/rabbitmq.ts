import * as amqp from "amqplib";
import { v4 as uuid4 } from "uuid";

interface RabbitMQOptions {
  url: string;
}

/**
 * RabbitMQ class to handle RabbitMQ connection and operations.
 */
export class RabbitMQ {
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;
  private readonly url: string;

  /**
   * RabbitMQ constructor
   * @param options RabbitMQOptions
   */
  constructor(options: RabbitMQOptions) {
    this.url = options.url;
  }

  /**
   * Connect to RabbitMQ server
   */
  async connect() {
    try {
      this.connection = await amqp.connect(this.url);
      this.channel = await this.connection.createChannel();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Publish message to an exchange
   * @param exchange string
   * @param routingKey string
   * @param message any
   * @returns Promise<void>
   */
  async publishExchange(
    exchange: string,
    routingKey: string,
    message: any,
  ): Promise<void> {
    if (!this.channel) {
      throw new Error("Channel is not initialized.");
    }
    try {
      await this.channel.assertExchange(exchange, "direct", { durable: false });
      this.channel.publish(
        exchange,
        routingKey,
        Buffer.from(JSON.stringify(message)),
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Subscribe for messages from an exchange
   * @param exchange string
   * @param queue string
   * @param routingKey string
   * @param callback (message: amqp.ConsumeMessage | null) => void
   * @returns Promise<void>
   */
  async subscribeExchange(
    exchange: string,
    routingKey: string,
    callback: (message: amqp.ConsumeMessage | null) => void,
  ): Promise<void> {
    if (!this.channel) {
      throw new Error("Channel is not initialized.");
    }
    try {
      await this.channel.assertExchange(exchange, "direct", { durable: false });
      const queueResponse = await this.channel.assertQueue("", {
        exclusive: true,
      });
      await this.channel.bindQueue(queueResponse.queue, exchange, routingKey);
      await this.channel.consume(queueResponse.queue, callback);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Publish message to an RPC queue
   * @param queue string
   * @param message any
   * @returns Promise<void>
   */
  async rpcRequest(queue: string, message: any): Promise<void> {
    if (!this.channel) {
      throw new Error("Channel is not initialized.");
    }

    const correlationId = uuid4();
    const queueResponse = await this.channel.assertQueue("", {
      exclusive: true,
    });

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("Timeout while waiting for response from server."));
      }, 5000);

      this.channel!.consume(queueResponse.queue, (msg) => {
        if (msg?.properties.correlationId === correlationId) {
          clearTimeout(timeout);
          this.channel?.cancel(msg.fields.consumerTag);
          resolve(JSON.parse(msg.content.toString()));
        }
      });
      try {
        this.channel!.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
          correlationId,
          replyTo: queueResponse.queue,
        });
      } catch (error) {
        clearTimeout(timeout);
        reject(error);
      }
    });
  }

  /**
   * Subscribe to an RPC queue
   * @param queue string
   * @param callback (message: amqp.ConsumeMessage) => Promise<any>
   * @returns Promise<void>
   */
  async rpcResponse(
    queue: string,
    callback: (message: amqp.ConsumeMessage) => Promise<any>,
  ): Promise<void> {
    if (!this.channel) {
      throw new Error("Channel is not initialized.");
    }
    await this.channel.assertQueue(queue, { durable: false });
    this.channel.prefetch(5);
    this.channel.consume(queue, async (msg) => {
      if (!msg) return;
      try {
        const callbackResponse = await callback(msg);
        if (!callbackResponse) return;
        this.channel!.sendToQueue(
          msg!.properties.replyTo,
          Buffer.from(JSON.stringify(callbackResponse)),
          {
            correlationId: msg.properties.correlationId,
          },
        );
      } catch (error) {
        console.error(error);
        this.channel!.nack(msg);
      } finally {
        this.channel!.ack(msg);
      }
    });
  }

  /**
   * Close the connection to RabbitMQ server
   */
  async close() {
    if (this.channel) {
      await this.channel.close();
      console.log("Channel closed.");
    }
    if (this.connection) {
      await this.connection.close();
      console.log("Connection closed.");
    }
  }
}
