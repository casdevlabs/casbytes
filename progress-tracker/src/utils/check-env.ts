const { DATABASE_URL, COOKIE_DOMAIN } = process.env;

export function checkEnv() {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined.");
  }

  if (!COOKIE_DOMAIN) {
    throw new Error("COOKIE_DOMAIN is not defined.");
  }
}
