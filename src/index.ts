import express from 'express';
import { config } from './Lesson/config/config';
import { lessonRouter } from './Lesson/infrastructure/LessonRouter';
import * as bodyParser from 'body-parser'
// import { SwaggerServe,SwaggerSetup } from './Lesson/config/swagger.config';
import swaggerJsdoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

//Configurations
const { port } = config.server;
const app = express();


const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Lesson service api documentation",
      version: "0.1.0",
      description: "This is an API for amilingue app",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Steven Padilla",
        url: "https://www.linkedin.com/in/steven-padilla-134bb724b/",
        email: "steven_padilla728@outlook.com",
      },
    },
    servers: [
      {
        url: "http://localhost:1709",
      },
    ],
  },
  apis: ["./infrastructure/*.js"],
};
 const specs=swaggerJsdoc(options)

//midlewares
app.use(bodyParser.json());
app.use("/lesson/", lessonRouter);
app.use("/api-docs",SwaggerUI.serve,SwaggerUI.setup(specs));

//server
app.listen(port, () => {
  console.log(`[APP] - Starting application on port ${port}`);
});
