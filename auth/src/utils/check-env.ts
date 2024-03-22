const { JWT_SECRET, DATABASE_URL, COOKIE_DOMAIN, RABBITMQ_URL } = process.env;

export function checkEnv() {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined.");
  }

  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined.");
  }

  // if (!COOKIE_DOMAIN) {
  //   throw new Error("COOKIE_DOMAIN is not defined.");
  // }

  if (!RABBITMQ_URL) {
    throw new Error("RABBITMQ_URL is not defined.");
  }
}
