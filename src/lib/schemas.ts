import { z } from "zod";

export const LoginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required." })
		.email({ message: "Invalid email address" })
		.trim(),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(20, "Passwords must be at most 20 characters long")
		.trim()
});

export const SignupSchema = z
.object({
   email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .trim(),
   password: z
      .string()
      .min(8, { message: "Passwords must be at least 8 characters long" })
      .max(20, "Passwords must be at most 20 characters long")
      .trim(),
   confirmPassword: z
      .string()
      .min(8, { message: "Passwords must be at least 8 characters long" })
      .max(20, "Passwords must be at most 20 characters long")
      .trim(),
})
.superRefine(({ password, confirmPassword }, ctx) => {
   if (password !== confirmPassword) {
      ctx.addIssue({
         code: "custom",
         message: "Passwords do not match",
         path: ["password"]
      });

      ctx.addIssue({
         code: "custom",
         message: "Passwords do not match",
         path: ["confirmPassword"]
      });
   }
});