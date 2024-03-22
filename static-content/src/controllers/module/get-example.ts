import { Request, Response } from "express";
import { asyncWrapper } from "@casbytes/common";
import { StatusCodes } from "http-status-codes";
import { getContentFromGithub } from "../../utils";

export const getExample = asyncWrapper(async (req: Request, res: Response) => {
  const { exampleSlug } = req.params;
  const { repo } = req.query as { repo: string };

  const { content } = await getContentFromGithub({
    repo,
    path: `examples/${exampleSlug}.mdx`,
  });

  res.status(StatusCodes.OK).json({ content });
});
