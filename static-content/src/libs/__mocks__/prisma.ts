import { execSync } from "child_process";
import { PrismaClient } from "@prisma/client";
import { beforeEach, beforeAll } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

beforeEach(() => {
  mockReset(prisma);
});

const prisma = mockDeep<PrismaClient>();
export default prisma;
