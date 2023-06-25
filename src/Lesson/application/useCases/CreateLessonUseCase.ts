import { CreateLessonRepository } from "../../domain/repository/CreateLessonRepository";

export class CreateLessonUseCase {
  constructor(readonly createLessonRepository: CreateLessonRepository) {}
  async run(
    id: number,
    title: string,
    text:String,
    sub_title: [],
    sub_text:[],
    imgs: [],
    videos: [],
  ) {
    return await this.createLessonRepository.createLesson(
      id,
      title,
      text,
      sub_title,
      sub_text,
      imgs,
      videos
    );
  }
}
