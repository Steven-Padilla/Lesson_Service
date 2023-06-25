import { DeleteByIdRepositoryImpl } from "../repository/DeleteByIdRepositoryImpl";
import { DeleteLessonUseCase } from "../../application/useCases/DeleteLessonUseCase";
import { DeleteLessonController } from "../controllers/DeleteLessonController";

const deleteByIdRepositoryImpl = new DeleteByIdRepositoryImpl();

//Dependenciy to delete a Lesson
const deleteLessonUseCase = new DeleteLessonUseCase(deleteByIdRepositoryImpl);
export const deleteLessonController = new DeleteLessonController(
  deleteLessonUseCase
);
