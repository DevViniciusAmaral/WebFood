import { User } from "./User";

export interface UserRepository {
  create: (user: User) => Promise<void>;
  find: (id: string) => Promise<User | null>;
  findAll: () => Promise<User[]>;
  update: (user: User) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
