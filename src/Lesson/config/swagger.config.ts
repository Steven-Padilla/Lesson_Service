import swaggerJsdoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

const options = {
  definition: {
    "openapi": "3.0.0",
    "info": {
      "title": "Lesson Service API",
      "description": "This is the api to Lesson service in amilingue project",
      "contact": {
        "email": "steven_padilla728@outlook.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "https://virtserver.swaggerhub.com/STEVENPADILLA728/LessonService/1.0.0",
        "description": "SwaggerHub API Auto Mocking"
      },
      {
        "url": "http://3.215.246.49/api/v1/lessons",
        "description": "Lesson api"
      }
    ],
    "tags": [
      {
        "name": "lessons",
        "description": "This is a lesson of the course"
      }
    ],
    "paths": {
      "/lessons": {
        "get": {
          "tags": [
            "lessons"
          ],
          "summary": "Get all lessons",
          "description": "You get all lessons available\n",
          "operationId": "getAllLessons",
          "responses": {
            "200": {
              "description": "List of all lessons",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LessonModel"
                  }
                }
              }
            },
            "500": {
              "description": "Server error"
            }
          }
        },
        "put": {
          "tags": [
            "lessons"
          ],
          "summary": "Update a lesson",
          "description": "Update lesson information",
          "operationId": "updateLesson",
          "requestBody": {
            "description": "The lesson you want to update (Important to send id)",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LessonModel"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Lesson Updated",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LessonModel"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        },
        "post": {
          "tags": [
            "lessons"
          ],
          "summary": "create a new lesson",
          "description": "Create a new lesson and add it to db",
          "operationId": "createLesson",
          "requestBody": {
            "description": "The new lesson that you want to create (Less id)",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LessonModel"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "Lesson created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LessonModel"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        }
      },
      "/lessons/{id}": {
        "delete": {
          "tags": [
            "lessons"
          ],
          "summary": "Delete a lesson by id",
          "description": "Delete a lesson on db",
          "operationId": "deleteLesson",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "style": "simple",
              "explode": false,
              "schema": {
                "type": "integer",
                "example": 1
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Lesson deleted",
              "content": {
                "text/plain": {
                  "schema": {
                    "type": "string",
                    "example": "Lesson with id 1 deleted"
                  }
                }
              }
            },
            "400": {
              "description": "invalid input, object invalid"
            },
            "500": {
              "description": "Server Error"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "LessonModel": {
          "required": [
            "imgs",
            "sub_text",
            "sub_title",
            "text",
            "title",
            "videos"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "example": 1
            },
            "title": {
              "type": "string",
              "example": "Steven Padilla"
            },
            "sub_title": {
              "type": "array",
              "example": [
                "Sub title 1",
                "Sub Title 2"
              ],
              "items": {
                "type": "string"
              }
            },
            "sub_text": {
              "type": "array",
              "example": [
                "Sub text 1",
                "Sub text 2"
              ],
              "items": {
                "type": "string"
              }
            },
            "imgs": {
              "type": "array",
              "example": [
                "path/to/image1",
                "path/to/image2"
              ],
              "items": {
                "type": "string"
              }
            },
            "videos": {
              "type": "array",
              "example": [
                "path/to/video1",
                "path/to/video2"
              ],
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  apis: ["../infrastructure/LessonRouter.js"],
};

export const SwaggerServe = SwaggerUI.serve;
export const SwaggerSetup = SwaggerUI.setup(swaggerJsdoc(options));