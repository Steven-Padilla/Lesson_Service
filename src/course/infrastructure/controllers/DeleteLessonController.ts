import { Request, Response } from "express";

import { DeleteLessonUseCase } from "../../application/useCases/DeleteLessonUseCase";

export class DeleteLessonController {
  constructor(readonly deleteLessonUseCase: DeleteLessonUseCase) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.deleteLessonUseCase.run(Number(id));
    return res.status(200).json(response);
  }
}
