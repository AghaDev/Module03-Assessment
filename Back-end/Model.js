import { DataTypes } from "sequelize";
import sequelize from "./connection.js";

const Articles = sequelize.define("Articles", {
  Image: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  body: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
});

Articles.sync();

export default Articles;
