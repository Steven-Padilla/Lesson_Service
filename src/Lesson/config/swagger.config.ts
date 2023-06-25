import swaggerJsdoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

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
  apis: ["../infrastructure/LessonRouter.js"],
};

export const SwaggerServe = SwaggerUI.serve;
export const SwaggerSetup = SwaggerUI.setup(swaggerJsdoc(options));
