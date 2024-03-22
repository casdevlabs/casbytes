import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;

function sign(payload: object, lifetime: number | string) {
  return jwt.sign(payload, secret, {
    expiresIn: lifetime,
  });
}

function verify(token: string) {
  return jwt.verify(token, secret);
}

export class JWT {
  static sign = sign;
  static verify = verify;
}
