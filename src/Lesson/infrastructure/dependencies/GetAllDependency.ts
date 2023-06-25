import { GetAllLessonsRepositoryImpl } from "../repository/GetAllRepositoryImpl";
import { GetAllLessonsUseCase } from "../../application/useCases/GetAllLessonUseCase";
import { GetAllLessonsController } from "../controllers/GetAllLessonsController";

//main
const getAllLessonsRepositoryImpl = new GetAllLessonsRepositoryImpl();

//Dependency to get all Lesson
const getAllLessonsUseCase = new GetAllLessonsUseCase(
  getAllLessonsRepositoryImpl
);
export const getAllLessonsController = new GetAllLessonsController(
  getAllLessonsUseCase
);
