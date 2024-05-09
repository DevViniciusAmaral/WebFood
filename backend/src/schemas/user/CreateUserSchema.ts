import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string({
    required_error: "The username is required",
    invalid_type_error: "The username must be a string",
  }),
});
