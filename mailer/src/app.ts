import express from "express";
import "express-async-errors";
import { errorHandler, notFound } from "@casbytes/common";
import { amqp } from "./services/rabbitmq";
import { AuthMailSender } from "./utils/mailtrap";

const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.send("Hello Mail server");
});

(async () => {
  try {
    await amqp.connect().then(() => {
      console.log("Connected to RabbitMQ server.");
    });

    /**
     * Send auth emails
     */
    await AuthMailSender.sendUserVerificationEmail();
    await AuthMailSender.sendWelcomeEmail();
    await AuthMailSender.sendResetPasswordEmail();

    /**
     * Send subscription emails
     */
  } catch (error) {
    console.error("Error connecting to RabbitMQ server: ", error);
  }
})();

app.all("*", notFound);
app.use(errorHandler);

export { app };
