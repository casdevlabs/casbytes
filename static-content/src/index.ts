import amqp, { Channel, Connection } from "amqplib/callback_api";
import { app } from "./app";
import { checkEnv } from "./utils";

const PORT = process.env.PORT ?? 3000;
checkEnv();
// (async () => {
//   amqp.connect(
//     "amqp://rabbitmq-service",
//     (err: any, connection: Connection) => {
//       if (err) throw err;

//       connection.createChannel((err, channel: Channel) => {
//         if (err) throw err;

//         const queue = "hello";
//         const msg = "Hello World!";

//         channel.assertQueue(queue, { durable: false });
//         channel.sendToQueue(queue, Buffer.from(msg));
//         console.log(`[x] Sent o ${msg}`);
//       });

//       setTimeout(() => {
//         connection.close();
//         process.exit(0);
//       }, 500);
//     },
//   );
// })();

app.listen(PORT, () => {
  console.log(`Content server listening to port ${PORT}...`);
});
