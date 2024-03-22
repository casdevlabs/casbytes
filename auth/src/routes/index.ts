import express from "express";
import { body, query } from "express-validator";
import { currentUser, requireAuth, validateRequest } from "@casbytes/common";
import {
  signup,
  signin,
  signout,
  me,
  updateProfile,
  verifyEmail,
  completedOnboarding,
} from "../controllers";

const router = express.Router();

/**
 * Signup route
 */
router.post(
  "/signup",
  [
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters"),
    body("email").trim().isEmail().withMessage("Invalid email."),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    // body("agreeToTerms")
    //   .isBoolean()
    //   .notEmpty()
    //   .withMessage("You must agree to the terms"),
  ],
  validateRequest,
  signup,
);

/**
 * Signin route
 */
router.post(
  "/signin",
  [
    body("email").trim().isEmail().withMessage("Invalid email."),
    body("password").trim().notEmpty().withMessage("Invalid password."),
  ],
  validateRequest,
  signin,
);

/**
 * Signout route
 */
router.post("/signout", requireAuth, signout);

/**
 * Me route
 */
router.get("/me", currentUser, me);

/**
 * Verify email route
 */
router.post(
  "/verify-email",
  [query("token").notEmpty().withMessage("Token is required")],
  validateRequest,
  verifyEmail,
);

/**
 * Update profile route
 */
router.patch(
  "/update-profile",
  [
    body("email").trim().isEmail().withMessage("Email required."),
    body("firstName")
      .optional()
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("lastName")
      .optional()
      .trim()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters"),
    body("password")
      .optional()
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  validateRequest,
  requireAuth,
  updateProfile,
);

/**
 * Complete onboarding route
 */
router.post(
  "/complete-onboarding",
  [body("email").trim().isEmail().withMessage("Email required.")],
  validateRequest,
  requireAuth,
  completedOnboarding,
);

export { router as auth };
