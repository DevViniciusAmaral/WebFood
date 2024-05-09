import { z } from "zod";

export const DeleteUserSchema = z.object({
  id: z
    .string({
      required_error: "The id is required",
      invalid_type_error: "The id must be a string",
    })
    .uuid({ message: "The id is an invalid UUID" }),
});
