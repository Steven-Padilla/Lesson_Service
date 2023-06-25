import { UpdateLessonRepository } from "../../domain/repository/UpdateLessonRepository";
import { Lesson } from "../db/LessonModel";

export class UpdateLessonRepositoryImpl implements UpdateLessonRepository {
  async updateLesson(
    id: number,
    title: string,
    text: String,
    sub_title: [],
    sub_text: [],
    imgs: [],
    videos: []
  ): Promise<Lesson> {
    const course = await Lesson.findByPk(id);

    if (course) {
      return await course.update({
        id,
        title,
        text,
        sub_title,
        sub_text,
        imgs,
        videos,
      });
    } else {
      return new Lesson();
    }
  }
}
