import express from 'express';
import { config } from './config';
import { lessonRouter } from './Lesson/infrastructure/CourseRouter';
import * as bodyParser from 'body-parser'
const { port } = config.server;
const app = express();


app.use(bodyParser.json());
app.use("/lesson/", lessonRouter)
app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
});

