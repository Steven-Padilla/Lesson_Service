import { LessonEntity } from "../entity/LessonEntity";

export interface UpdateLessonRepository {
  updateLesson(
    id: number,
    title: string,
    text:String,
    sub_title: [],
    sub_text:[],
    imgs: [],
    video: []
  ): Promise<LessonEntity>;
}
