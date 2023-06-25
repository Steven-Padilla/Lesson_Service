import { GetAllLessonsRepository } from "../../domain/repository/GetAllLessonsRepository";

export class GetAllLessonsUseCase {
  constructor(readonly getAllLessonRepository: GetAllLessonsRepository) {}
  async run() {
    return await this.getAllLessonRepository.getAll();
  }
}
