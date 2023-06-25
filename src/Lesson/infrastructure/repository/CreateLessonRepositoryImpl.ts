import { CreateLessonRepository } from "../../domain/repository/CreateLessonRepository";
import { Lesson } from "../db/LessonModel";

export class CreateLessonRepositoryImpl implements CreateLessonRepository {
  async createLesson(
    id: number,
    title: string,
    text: String,
    sub_title: [],
    sub_text: [],
    imgs: [],
    videos: []
  ): Promise<[Lesson, boolean]> {
    const lesson = Lesson.findOrCreate({
      where: { title },
      defaults: {
        id,
        title,
        text,
        sub_title,
        sub_text,
        imgs,
        videos,
      },
    });
    return lesson;
  }
}
