import express from "express";
import { createProgress } from "../controllers/progress";

const router = express.Router();

router.post("/", createProgress);

export { router as progress };
