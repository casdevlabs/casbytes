import { Prisma, PrismaClient } from "@prisma/client";
import slugify from "slugify";
import { ICourse } from "../constants/types";

export async function createCourse(
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, any>,
  courseData: ICourse,
) {
  await prisma.course.create({
    data: {
      ...courseData,
      slug: slugify(courseData.title, { lower: true }),
      modules: {
        create: courseData.modules.map((module) => ({
          ...module,
          slug: slugify(module.title, { lower: true }),
          examples: {
            create: module.examples.map((example) => ({
              ...example,
              slug: slugify(example.title, { lower: true }),
            })),
          },
          exercises: {
            create: module.exercises.map((exercise) => ({
              ...exercise,
              slug: slugify(exercise.title, { lower: true }),
            })),
          },
          lessons: {
            create: module.lessons.map((lesson) => ({
              ...lesson,
              slug: slugify(lesson.title, { lower: true }),
              quiz: slugify(lesson.title, { lower: true }),
            })),
          },
        })),
      },
    },
  });
  console.log(
    `Updated course with title "${courseData.title}" and slug "${courseData.slug}"`,
  );
}

export async function updateCourse(
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, any>,
  courseSlug: string,
  courseData: ICourse,
) {
  await prisma.course.update({
    where: { slug: courseSlug },
    data: {
      ...courseData,
      slug: slugify(courseData.title, { lower: true }),
      modules: {
        upsert: courseData.modules.map((module) => ({
          where: { slug: slugify(module.title) },
          update: {
            ...module,
            slug: slugify(module.title, { lower: true }),
            examples: {
              upsert: module.examples.map((example) => ({
                where: { slug: slugify(example.title) },
                update: {
                  ...example,
                  slug: slugify(example.title),
                },
                create: {
                  ...example,
                  slug: slugify(example.title),
                },
              })),
            },
            exercises: {
              upsert: module.exercises.map((exercise) => ({
                where: { slug: slugify(exercise.title) },
                update: {
                  ...exercise,
                  slug: slugify(exercise.title),
                },
                create: {
                  ...exercise,
                  slug: slugify(exercise.title),
                },
              })),
            },
            lessons: {
              upsert: module.lessons.map((lesson) => ({
                where: { slug: slugify(lesson.title) },
                update: {
                  ...lesson,
                  slug: slugify(lesson.title),
                  quiz: slugify(lesson.title),
                },
                create: {
                  ...lesson,
                  slug: slugify(lesson.title),
                  quiz: slugify(lesson.title),
                },
              })),
            },
          },
          create: {
            ...module,
            slug: slugify(module.title, { lower: true }),
            examples: {
              create: module.examples.map((example) => ({
                ...example,
                slug: slugify(example.title),
              })),
            },
            exercises: {
              create: module.exercises.map((exercise) => ({
                ...exercise,
                slug: slugify(exercise.title),
              })),
            },
            lessons: {
              create: module.lessons.map((lesson: any) => ({
                ...lesson,
                slug: slugify(lesson.title),
                quiz: slugify(lesson.title),
              })),
            },
          },
        })),
      },
    },
  });
  console.log(
    `Updated course with title "${courseData.title}" and slug "${courseSlug}"`,
  );
}
