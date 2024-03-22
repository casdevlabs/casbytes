import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, notFound } from "@casbytes/common";
import { auth } from "./routes";
import { amqp } from "./services/rabbitmq";

const app = express();

const { NODE_ENV, COOKIE_DOMAIN } = process.env;

app.set("trust proxy", true);

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    sameSite: "lax",
    // domain: COOKIE_DOMAIN,
    secure: NODE_ENV === "production",
    httpOnly: NODE_ENV === "production",
  }),
);

app.get("/api/auth", (req, res) => {
  res.send("Hello auth");
});
app.use("/api/auth/", auth);

(async () => {
  try {
    await amqp.connect().then(() => {
      console.log("Connected to RabbitMQ server.");
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();

app.all("*", notFound);
app.use(errorHandler);

export { app };
