import { Request, Response } from "express";

import { GetAllLessonsUseCase } from "../../application/useCases/GetAllLessonUseCase";

export class GetAllLessonsController {
  constructor(readonly getAllLessonsUseCase: GetAllLessonsUseCase) {}

  async run(req: Request, res: Response) {
    const listLessons = await this.getAllLessonsUseCase.run();
    return res.status(200).json(listLessons);
  }
}
