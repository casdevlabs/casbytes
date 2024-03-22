import fs from "fs";
import Ajv from "ajv";
import { readJsonFiles } from "./json";

const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    title: { type: "string" },
    published: { type: "boolean" },
    type: { type: "string" },
    overview: { type: "string" },
    modules: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          examples: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
              },
              required: ["title"],
            },
          },
          exercises: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
              },
              required: ["title"],
            },
          },
          lessons: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
              },
              required: ["title"],
            },
          },
        },
        required: ["title", "examples", "exercises", "lessons"],
      },
    },
  },
  required: ["title", "published", "overview", "modules"],
};

(async () => {
  const files = readJsonFiles();

  for (const file of files) {
    try {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }

        const meta = JSON.parse(data);
        const validate = ajv.compile(schema);
        const valid = validate(meta);

        if (!valid) {
          console.error(validate.errors);
          process.exit(1);
        }
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
})();
