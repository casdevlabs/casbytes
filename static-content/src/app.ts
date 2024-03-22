import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { errorHandler, notFound, requireAuth } from "@casbytes/common";
import { course, lesson, module } from "./routes";

const { NODE_ENV, COOKIE_DOMAIN } = process.env;
const BASE_URL = "/api/content";

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

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(BASE_URL, course);
app.use(BASE_URL, module);
app.use(BASE_URL, lesson);

app.all("*", notFound);
app.use(errorHandler);

export { app };
