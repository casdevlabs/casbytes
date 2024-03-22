import { Request, Response } from "express";
import { asyncWrapper } from "@casbytes/common";
import { StatusCodes } from "http-status-codes";
import { getContentFromGithub } from "../../utils";

export const getQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const { lessonSlug } = req.params;
  const { repo } = req.query as { repo: string };

  const { content } = await getContentFromGithub({
    repo,
    path: `lessons/${lessonSlug}/quiz.json`,
  });

  console.log("Content", content);

  const quiz = JSON.parse(content);

  res.status(StatusCodes.OK).json(quiz);
  // res.send("prompto");
});
