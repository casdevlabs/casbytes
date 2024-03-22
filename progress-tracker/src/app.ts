import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, notFound } from "@casbytes/common";
import amqp from "amqplib/callback_api";
import { badges, progress, status } from "./routes";

const { NODE_ENV, COOKIE_DOMAIN } = process.env;
const BASE_URL = "/api/progress";

const app = express();

app.set("trust proxy", true);

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    sameSite: "lax",
    domain: COOKIE_DOMAIN,
    secure: NODE_ENV === "production",
    httpOnly: NODE_ENV === "production",
  }),
);

// app.use("/api/progress/", auth);
app.use(BASE_URL, badges);
app.use(BASE_URL, progress);
app.use(BASE_URL, status);

// (async () => {
//   amqp.connect("amqp://rabbitmq-service", (err, connection) => {
//     if (err) throw err;

//     connection.createChannel((err, channel) => {
//       if (err) throw err;

//       const queue = "hello";

//       channel.assertQueue(queue, { durable: false });

//       console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

//       channel.consume(
//         queue,
//         (msg) => {
//           console.log(`[x] Received ${msg?.content.toString()}`);
//         },
//         { noAck: true },
//       );
//     });
//   });
// })();

app.all("*", notFound);
app.use(errorHandler);

export { app };
