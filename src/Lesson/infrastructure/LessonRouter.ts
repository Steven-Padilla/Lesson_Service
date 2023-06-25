import * as express from "express";
const lessonRouter = express.Router();

import { getAllLessonsController } from "./dependencies/GetAllDependency";
import { createLessonController } from "./dependencies/CreateCourseDependency";
import { deleteLessonController } from "./dependencies/DeleteCourseDependency";
import { updateLessonController } from "./dependencies/UpdateCourseDependency";

/**
 * @swagger
 * components:
 *   schemas:
 *     Lesson:
 *       type: object
 *       required:
 *         - title
 *         - text
 *         - sub_title
 *         - sub_text
 *         - imgs
 *         - videos
 *       properties:
 *         id:
 *           type: integer 
 *           description: The auto-generated id of the lesson
 *         title:
 *           type: string
 *           description: The lesson title
 *         text:
 *           type: string
 *           description: Some text describing the lesson
 *         sub_title:
 *           type: array
 *           description: A list of sub-titles for this lesson 
 *         sub_text:
 *           type: array
 *           description: A list of text for each sub title
 *         imgs:
 *           type: array
 *           description: A list of images for this lesson
 *         videos:
 *           type: array
 *           description: A list of links of videos for this lesson
 *       example:
 *         id: 1
 *         title: Numbers
 *         text: In this lesson we are going to teach you the numbers on english...
 *         sub_title: ['First subtitle', 'Second subtitle','Third subtitle']
 *         sub_text: ['First text...', 'Second text...','Third text...']
 *         imgs: ['id_img','id_img']
 *         videos: ['id_video', 'id_video','id_video']
 */


/**
 * @swagger
 * tags:
 *   name: Lessons Routes
 *   description: The Lesson managing API
 * /Lesson:
 *   get:
 *     summary: Get all lessons
 *     tags: [Lesson]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: You got an array with all lessons.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
lessonRouter.get("/getall/",getAllLessonsController.run.bind(getAllLessonsController));
lessonRouter.post("/create/",createLessonController.run.bind(createLessonController));
lessonRouter.put("/update/", updateLessonController.run.bind(updateLessonController));
lessonRouter.delete("/delete/:id",deleteLessonController.run.bind(deleteLessonController));

export { lessonRouter };
