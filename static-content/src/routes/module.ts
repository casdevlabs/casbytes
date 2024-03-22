import express from "express";
import { param, query } from "express-validator";
import { requireAuth, validateRequest } from "@casbytes/common";
import {
  getExample,
  getExercise,
  getModule,
  getModules,
} from "../controllers/module";

const MODULE_ROUTER_BASE = "/modules";

const router = express.Router();

router.get(
  `${MODULE_ROUTER_BASE}/:courseId`,
  // requireAuth,
  [param("courseId").isUUID().withMessage("Course ID must be a valid UUID")],
  validateRequest,
  getModules,
);

router.get(
  `${MODULE_ROUTER_BASE}/:moduleId`,
  requireAuth,
  [param("moduleId").isUUID().withMessage("Module ID must be a valid UUID")],
  validateRequest,
  getModule,
);

router.get(
  `${MODULE_ROUTER_BASE}/example/:exampleSlug`,
  // requireAuth,
  [
    param("exampleSlug")
      .isString()
      .withMessage("Example slug must be a valid string"),
    query("repo").isString().withMessage("Repo must be a valid string"),
  ],
  validateRequest,
  getExample,
);

router.get(
  `${MODULE_ROUTER_BASE}/exercise/:exerciseSlug`,
  // requireAuth,
  [
    param("exerciseSlug")
      .isString()
      .withMessage("Exercise slug must be a valid string"),
    query("repo").isString().withMessage("Repo must be a valid string"),
  ],
  validateRequest,
  getExercise,
);

export { router as module };
