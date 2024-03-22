const { DATABASE_URL, GITHUB_TOKEN, COOKIE_DOMAIN, GITHUB_OWNER } = process.env;

export function checkEnv() {
  if (!COOKIE_DOMAIN) {
    throw new Error("COOKIE_DOMAIN is not defined.");
  }
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined.");
  }

  if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not defined.");
  }

  if (!GITHUB_OWNER) {
    throw new Error("GITHUB_OWNER is not defined.");
  }
}
