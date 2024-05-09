import { v4 as uuid } from "uuid";
import { UserFactory } from "../models/UserFactory";

export const userFactory: UserFactory = {
  create: (name) => ({ id: uuid(), name }),
};
