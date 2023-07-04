import express from "express";
import { lessonRouter } from "./Lesson/infrastructure/CourseRouter";
import * as bodyParser from "body-parser";
const app = express();

// Configs
import { SwaggerServe, SwaggerSetup } from './Lesson/config/swagger.config';
import { config } from "./Lesson/config/config";
const { port } = config.server;

// Midlewares
app.use(bodyParser.json());
app.use("/api/v1/", lessonRouter);
app.use("/api-docs/lessons",SwaggerServe,SwaggerSetup);

// Server
app.listen(port, () => {
  console.log(`[APP] - Starting application on port ${port}`);
});
