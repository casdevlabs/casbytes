import { RabbitMQ } from "@casbytes/common";

const url = process.env.RABBITMQ_URL!;
const amqp = new RabbitMQ({ url });
export { amqp };
