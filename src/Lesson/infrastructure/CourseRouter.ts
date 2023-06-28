import * as express from "express";
const lessonRouter = express.Router();

import { getAllLessonsController } from "./dependencies/GetAllDependency";
import { createLessonController } from "./dependencies/CreateCourseDependency";
import { deleteLessonController } from "./dependencies/DeleteCourseDependency";
import { updateLessonController } from "./dependencies/UpdateCourseDependency";

lessonRouter.get("/lessons/",getAllLessonsController.run.bind(getAllLessonsController)
);
lessonRouter.post("/lessons/",createLessonController.run.bind(createLessonController)
);
lessonRouter.put("/lessons/", updateLessonController.run.bind(updateLessonController));
lessonRouter.delete("/lessons/:id",deleteLessonController.run.bind(deleteLessonController)
);

export { lessonRouter };
