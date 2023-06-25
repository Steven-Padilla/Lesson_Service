import { Lesson } from "../db/LessonModel";
import { GetAllLessonsRepository } from "../../domain/repository/GetAllLessonsRepository";

export class GetAllLessonsRepositoryImpl implements GetAllLessonsRepository {
  async getAll(): Promise<Lesson[]> {
    const listLessons = await Lesson.findAll();
    return listLessons;
  }
}
