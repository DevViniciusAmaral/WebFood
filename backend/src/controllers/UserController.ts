import { ZodError } from "zod";
import { Request, Response } from "express";
import { userFactory } from "../factories/UserFactory";
import { userRepository } from "../repositores/UserRepository";

// SCHEMAS
import { CreateUserSchema } from "../schemas/user/CreateUserSchema";
import { UpdateUserSchema } from "../schemas/user/UpdateUserSchema";
import { DeleteUserSchema } from "../schemas/user/DeleteUserSchema";

export const userController = {
  create: async (request: Request, response: Response) => {
    try {
      const { name } = CreateUserSchema.parse(request.body);

      const user = userFactory.create(name);
      await userRepository.create(user);

      response
        .status(200)
        .send({ message: "User successfully registered", data: user });
    } catch (error: any) {
      if (error instanceof ZodError) {
        response.status(400).send({ message: error.issues[0].message });
      } else response.status(500).send({ message: "Internal server error" });
    }
  },

  findAll: async (request: Request, response: Response) => {
    try {
      const users = await userRepository.findAll();

      response
        .status(200)
        .send({ message: "Users listed successfully", data: users });
    } catch (error: any) {
      response.status(500).send({ message: "Internal server error" });
    }
  },

  update: async (request: Request, response: Response) => {
    try {
      const { id, name } = UpdateUserSchema.parse(request.body);

      const user = await userRepository.find(id);
      if (!user || user === null) throw new Error("User not found");

      await userRepository.update({ id, name });

      response
        .status(200)
        .send({ message: "User successfully updated", data: { id, name } });
    } catch (error: any) {
      if (error instanceof ZodError) {
        response.status(400).send({ message: error.issues[0].message });
      } else if (error.message) {
        response.status(400).send({ message: error.message });
      } else response.status(500).send({ message: "Internal server error" });
    }
  },

  delete: async (request: Request, response: Response) => {
    try {
      const { id } = DeleteUserSchema.parse(request.params);

      const user = await userRepository.find(id);
      if (!user || user === null) throw new Error("User not found");

      await userRepository.delete(id);

      response.status(200).send({ message: "User successfully deleted" });
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(400).send({ message: error.issues[0].message });
      } else if (error.message) {
        response.status(400).send({ message: error.message });
      } else response.status(500).send({ message: "Internal server error" });
    }
  },
};
