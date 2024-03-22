import express from "express";
import { requireAuth, validateRequest } from "@casbytes/common";
import { param, query } from "express-validator";
import { getLesson, getLessons, getQuiz } from "../controllers/lesson";

const LESSON_ROUTER_BASE = "/lessons";

const router = express.Router();

router.get(
  `${LESSON_ROUTER_BASE}/:moduleId`,
  // requireAuth,
  [param("moduleId").isUUID().withMessage("Module ID must be a valid UUID")],
  validateRequest,
  getLessons,
);

router.get(
  `${LESSON_ROUTER_BASE}/:lessonSlug/lesson`,
  [
    param("lessonSlug")
      .isString()
      .withMessage("Lesson slug must be a valid string"),
    query("repo").isString().withMessage("Repo must be a valid string"),
  ],
  validateRequest,
  getLesson,
);
router.get(
  `${LESSON_ROUTER_BASE}/:lessonSlug/quiz`,
  [
    param("lessonSlug")
      .isString()
      .withMessage("Lesson slug must be a valid string"),
    query("repo").isString().withMessage("Repo must be a valid string"),
  ],
  validateRequest,
  getQuiz,
);

export { router as lesson };
