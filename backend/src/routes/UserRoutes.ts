import express from "express";
import { userController } from "../controllers/UserController";

export const UserRoutes = express.Router();

UserRoutes.get("/", userController.findAll);
UserRoutes.post("/", userController.create);
UserRoutes.put("/", userController.update);
UserRoutes.delete("/:id", userController.delete);
