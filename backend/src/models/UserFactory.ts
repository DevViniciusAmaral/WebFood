import { User } from "./User";

export interface UserFactory {
  create: (name: string) => User;
}
