import { Request, Response } from "express";
import { CreateLessonUseCase } from "../../application/useCases/CreateLessonUseCase";
import { Lesson } from "../db/LessonModel";

export class CreateLessonController {
  constructor(readonly createLessonUseCase: CreateLessonUseCase) {}

  async run(req: Request, res: Response) {
    const body = req.body as Lesson;
    const lesson = await this.createLessonUseCase.run(
      body.id,
      body.title,
      body.text,
      body.sub_title,
      body.sub_text,
      body.imgs,
      body.videos
    );
    return res.status(200).json(lesson);
  }
}
