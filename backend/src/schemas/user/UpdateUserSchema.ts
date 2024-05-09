import { z } from "zod";

export const UpdateUserSchema = z.object({
  id: z
    .string({
      required_error: "The id is required",
      invalid_type_error: "The id must be a string",
    })
    .uuid({ message: "The id is an invalid UUID" }),

  name: z.string({
    required_error: "The username is required",
    invalid_type_error: "The username must be a string",
  }),
});
