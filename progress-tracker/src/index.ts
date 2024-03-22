import { app } from "./app";
import { checkEnv } from "./utils/check-env";

const PORT = process.env.PORT ?? 3000;
// checkEnv();

app.listen(PORT, () => {
  console.log(`Progress Tracker server listening to port ${PORT}...`);
});
