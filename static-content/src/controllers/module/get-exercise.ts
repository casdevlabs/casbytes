import { Request, Response } from "express";
import { asyncWrapper } from "@casbytes/common";
import { StatusCodes } from "http-status-codes";
import { getContentFromGithub } from "../../utils";

export const getExercise = asyncWrapper(async (req: Request, res: Response) => {
  const { exerciseSlug } = req.params;
  const { repo } = req.query as { repo: string };

  const { content: exercise } = await getContentFromGithub({
    repo,
    path: `exercises/${exerciseSlug}.mdx`,
  });

  const content = JSON.parse(exercise);

  res.status(StatusCodes.OK).json({ content });
});
