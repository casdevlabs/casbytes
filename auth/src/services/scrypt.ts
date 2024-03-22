import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const asyncScrypt = promisify(scrypt);

export class Scrypt {
  static async toHash(storedPassword: string) {
    const salt = randomBytes(8).toString("hex");
    const _buffer = (await asyncScrypt(storedPassword, salt, 64)) as Buffer;
    return `${_buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const _buffer = (await asyncScrypt(suppliedPassword, salt, 64)) as Buffer;
    return hashedPassword === _buffer.toString("hex");
  }
}
