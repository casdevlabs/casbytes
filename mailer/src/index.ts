import amqp, { Channel, Connection } from "amqplib/callback_api";
import { app } from "./app";
import { checkEnv } from "./utils";

const PORT = process.env.PORT ?? 3000;
checkEnv();

app.listen(PORT, () => {
  console.log(`Mail server listening to port ${PORT}...`);
});
