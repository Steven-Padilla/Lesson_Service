import { Model, DataTypes } from "sequelize";
import { postgresConnection } from "./DBConnection";
import { LessonEntity } from "../../domain/entity/LessonEntity";
export class Lesson extends Model implements LessonEntity {
  declare id: number;
  declare title: string;
  declare text:String;
  declare sub_title: [];
  declare sub_text:[];
  declare imgs: [];
  declare videos: [];
}

Lesson.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    sub_title: DataTypes.ARRAY(DataTypes.STRING),
    sub_text: DataTypes.ARRAY(DataTypes.TEXT),
    imgs: DataTypes.ARRAY(DataTypes.STRING),
    videos: DataTypes.ARRAY(DataTypes.STRING),

  },
  { sequelize: postgresConnection, modelName: "lessons" }
);
