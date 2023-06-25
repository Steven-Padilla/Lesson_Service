import { Request, Response } from "express";
import { UpdateLessonUseCase } from "../../application/useCases/UpdateLessonUseCase";
import { Lesson } from "../db/LessonModel";

export class UpdateLessonController {
  constructor(readonly updateLessonUseCase: UpdateLessonUseCase) {}

  async run(req: Request, res: Response) {
    const body = req.body as Lesson;

    const lesson = await this.updateLessonUseCase.run(
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
