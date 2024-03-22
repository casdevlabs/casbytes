import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import slugify from "slugify";
import { prisma } from "../../libs/prisma";
import { IModule } from "../../constants/types";

enum BadgeTitles {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  EXPERT = "EXPERT",
}

export const createProgress = asyncWrapper(
  async (req: Request, res: Response) => {
    const { title, overview, modules, userId } = req.body;
    const course = await prisma.course.create({
      data: {
        title,
        slug: slugify(title, { lower: true }),
        overview,
        userId,
      },
    });

    await Promise.all(
      modules.map(async (module: IModule) => {
        const { title, exercises, examples, lessons } = module;
        const newModule = await prisma.module.create({
          data: {
            title,
            slug: slugify(title),
            userId,
            courseId: course.id,
          },
        });

        await Promise.all([
          prisma.badge.create({
            data: {
              title: BadgeTitles.BEGINNER,
              userId,
              moduleId: newModule.id,
              active: false,
            },
          }),
          prisma.badge.create({
            data: {
              title: BadgeTitles.INTERMEDIATE,
              userId,
              moduleId: newModule.id,
              active: false,
            },
          }),
          prisma.badge.create({
            data: {
              title: BadgeTitles.ADVANCED,
              userId,
              moduleId: newModule.id,
              active: false,
            },
          }),
          prisma.badge.create({
            data: {
              title: BadgeTitles.EXPERT,
              userId,
              moduleId: newModule.id,
              active: false,
            },
          }),
        ]);

        const exercisePromises = exercises.map((exercise) =>
          prisma.exercise.create({
            data: {
              title: exercise.title,
              slug: slugify(exercise.title),
              userId,
              moduleId: newModule.id,
            },
          }),
        );

        const examplePromises = examples.map((example) =>
          prisma.example.create({
            data: {
              title: example.title,
              slug: slugify(example.title),
              userId,
              moduleId: newModule.id,
            },
          }),
        );

        const lessonPromises = lessons.map((lesson) =>
          prisma.lesson.create({
            data: {
              title: lesson.title,
              slug: slugify(lesson.title),
              userId,
              moduleId: newModule.id,
              quiz: slugify(lesson.title),
            },
          }),
        );

        await Promise.all([
          ...exercisePromises,
          ...examplePromises,
          ...lessonPromises,
        ]);
      }),
    );
    res.status(StatusCodes.CREATED).send(course);
  },
);
