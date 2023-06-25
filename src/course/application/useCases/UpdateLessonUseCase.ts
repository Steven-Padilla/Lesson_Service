import { UpdateLessonRepository } from "../../domain/repository/UpdateLessonRepository";

export class UpdateLessonUseCase {
  constructor(readonly updateLessonRepository: UpdateLessonRepository) {}
  async run(
    id: number,
    title: string,
    text: String,
    sub_title: [],
    sub_text: [],
    imgs: [],
    videos: []
  ) {
    return await this.updateLessonRepository.updateLesson(
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
