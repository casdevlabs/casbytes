import { Prisma, PrismaClient } from "@prisma/client";
import { ICourse } from "./constants/types";
import { prisma } from "./libs/prisma";
import { parseJson, readJsonFiles } from "./utils/json";
import { createCourse, updateCourse } from "./utils/prisma";

async function createOrUpdateCourse(
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, any>,
  courseData: ICourse,
) {
  const existingCourse = await prisma.course.findFirst({
    where: { slug: courseData.slug },
  });
  if (existingCourse) {
    await updateCourse(prisma, existingCourse.slug, courseData);
  } else {
    await createCourse(prisma, courseData);
  }
}

async function main() {
  const files = readJsonFiles();
  for (const file of files) {
    const courseData = parseJson(file) as ICourse;
    try {
      await createOrUpdateCourse(prisma, courseData);
      console.log(
        `Course "${courseData.title}" and its elements created/updated successfully!`,
      );
    } catch (error) {
      console.error("Error creating course:", error);
      process.exit(1);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
