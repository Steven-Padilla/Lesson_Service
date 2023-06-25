import * as express from "express";
const lessonRouter = express.Router();

import { getAllLessonsController } from "./dependencies/GetAllDependency";
import { createLessonController } from "./dependencies/CreateCourseDependency";
import { deleteLessonController } from "./dependencies/DeleteCourseDependency";
import { updateLessonController } from "./dependencies/UpdateCourseDependency";

lessonRouter.get("/getall/",getAllLessonsController.run.bind(getAllLessonsController)
);
lessonRouter.post("/create/",createLessonController.run.bind(createLessonController)
);
lessonRouter.put("/update/", updateLessonController.run.bind(updateLessonController));
lessonRouter.delete("/delete/:id",deleteLessonController.run.bind(deleteLessonController)
);

export { lessonRouter };
