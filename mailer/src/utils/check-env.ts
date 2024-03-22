const { RABBITMQ_URL, MAILTRAP_TOKEN } = process.env;

export function checkEnv() {
  if (!RABBITMQ_URL) {
    throw new Error("RABBITMQ_URL is not defined.");
  }

  // if (!MAILTRAP_TOKEN) {
  //   throw new Error("MAILTRAP_TOKEN is not defined.");
  // }
}
