import { UpdateLessonRepositoryImpl } from "../repository/UpdateLessonRepositoryImpl";
import { UpdateLessonUseCase } from "../../application/useCases/UpdateLessonUseCase";
import { UpdateLessonController } from "../controllers/UpdateLessonController";

const updateLessonControllerImpl = new UpdateLessonRepositoryImpl();

//Dependency to update a Lesson
const updateLessonUseCase = new UpdateLessonUseCase(updateLessonControllerImpl);
export const updateLessonController = new UpdateLessonController(
  updateLessonUseCase
);
