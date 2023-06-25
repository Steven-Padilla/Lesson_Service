import { DeleteByIdRepository } from "../../domain/repository/DeleteByIdRepository";
import { Lesson } from "../db/LessonModel";

export class DeleteByIdRepositoryImpl implements DeleteByIdRepository {
  async deleteById(id: number): Promise<string> {
    const tarjet = await Lesson.findByPk(id);
    if (tarjet) {
      const { title } = tarjet;
      await tarjet.destroy();
      return `Lesson with title: <${title}> successfully deleted`;
    } else {
      return `Lesson with id: ${id} not found`;
    }
  }
}
