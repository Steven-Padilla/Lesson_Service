import { CreateLessonRepositoryImpl } from "../repository/CreateLessonRepositoryImpl";
import { CreateLessonUseCase } from "../../application/useCases/CreateLessonUseCase";
import { CreateLessonController } from "../controllers/CreateLessonController";

//main
const createLessonRepositoryImpl = new CreateLessonRepositoryImpl();

//Dependency to create a Lesson
const createLessonUseCase = new CreateLessonUseCase(createLessonRepositoryImpl);
export const createLessonController = new CreateLessonController(
  createLessonUseCase
);
