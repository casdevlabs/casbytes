import express from "express";
import { param } from "express-validator";
import { requireAuth, validateRequest } from "@casbytes/common";
import { getCourses, getCourse } from "../controllers/course";

const COURSE_ROUTER_BASE = "/courses";

const router = express.Router();

router.get(
  `${COURSE_ROUTER_BASE}`,
  // requireAuth,
  getCourses,
);
router.get(
  `${COURSE_ROUTER_BASE}/:courseId`,
  // requireAuth,
  [param("courseId").isUUID().withMessage("Course ID must be a valid UUID")],
  validateRequest,
  getCourse,
);

export { router as course };
