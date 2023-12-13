import Controller from "./Controller.js";
import express from "express";  


const Router = express.Router();

Router.post("/create", Controller.add);

Router.get("/findall", Controller.findall);

Router.get("/findbypk/:id", Controller.findByPk);

Router.put("/update/:id", Controller.UpdateByPk);

Router.delete("/delete/:id", Controller.DeleteByPk);

export default Router;
