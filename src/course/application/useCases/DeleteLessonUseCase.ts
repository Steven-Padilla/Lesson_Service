import { DeleteByIdRepository } from "../../domain/repository/DeleteByIdRepository";

export class DeleteLessonUseCase {
    constructor (
        readonly deleteByIdRepository:DeleteByIdRepository,
    ){}
    async run(id:number) {
        return await this.deleteByIdRepository.deleteById(id);
      }
}