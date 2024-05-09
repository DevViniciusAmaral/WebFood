import { db } from "../database";
import { UserRepository } from "../models/UserRepository";

export const userRepository: UserRepository = {
  create: async ({ id, name }) => {
    await db.none("INSERT INTO Users (id, name) VALUES ($1, $2)", [id, name]);
  },

  find: async (id) => {
    return await db.oneOrNone("SELECT * FROM Users WHERE id=$1", id);
  },

  findAll: async () => {
    const data = await db.manyOrNone("SELECT * FROM Users");
    return data ?? [];
  },

  update: async ({ id, name }) => {
    await db.none("UPDATE Users SET name=$2 WHERE id=$1", [id, name]);
  },

  delete: async (id) => {
    await db.none("DELETE FROM Users WHERE id=$1", id);
  },
};
