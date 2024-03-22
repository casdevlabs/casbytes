import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { getContentFromGithub } from "../../utils";

export const getLesson = asyncWrapper(async (req: Request, res: Response) => {
  const { lessonSlug } = req.params;
  const { repo } = req.query as { repo: string };

  const { content } = await getContentFromGithub({
    repo,
    path: `lessons/${lessonSlug}/content.mdx`,
  });

  res.status(StatusCodes.OK).json({ content });
});
