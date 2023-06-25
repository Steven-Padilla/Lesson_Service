import { LessonEntity } from "../entity/LessonEntity";

export interface GetAllLessonsRepository {
  getAll(): Promise<Array<LessonEntity>>;
}
