import request from "supertest";
import { describe, it, expect } from "vitest";
import { StatusCodes } from "http-status-codes";
import { app } from "../../app";

const COURSES_BASE_URL = "/api/content/courses";

describe("CourseController", () => {
  it("should return 200 status code on courses fetch", async () => {
    const result = await request(app).get(COURSES_BASE_URL);
    expect(result.status).toBe(StatusCodes.OK);
  });

  it("should fetch a course by a given ID", async () => {
    const courseId = "c23a0f03-8e34-4e92-9986-e12e8d811eee";
    const result = await request(app).get(`${COURSES_BASE_URL}/${courseId}`);
    expect(result.body.id).toStrictEqual(courseId);
  });

  it("should return 200 status code on a single course fetch by an ID", async () => {
    const courseId = "c23a0f03-8e34-4e92-9986-e12e8d811eee";
    const result = await request(app).get(`${COURSES_BASE_URL}/${courseId}`);
    expect(result.status).toBe(StatusCodes.OK);
  });
});
