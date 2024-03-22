import fs from "fs";

export function readJsonFiles(): string[] {
  const metaFolder = "src/meta";
  const files = fs
    .readdirSync(metaFolder)
    .filter((file) => file.endsWith(".json"))
    .map((file) => `${metaFolder}/${file}`);
  return files;
}

export function parseJson(file: string) {
  const data = fs.readFileSync(file, "utf-8");
  return JSON.parse(data);
}
