import { AuthApiError } from "@supabase/supabase-js";
import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { z, ZodError } from "zod";

const SignupSchema = z
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

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

      try {
         const result = SignupSchema.parse(body);

         const { data, error: err } = await locals.sb.auth.signUp({
            email: result.email as string,
            password: result.password as string
         });
   
         if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
               return fail(err.status, {
                  error: "Invalid email or password"
               });
            }
   
            return fail(500, {
               error: "Server error. Please try again later."
            });
         }
   
         throw redirect(303, "/");
      } catch (err) {
         if (err instanceof ZodError) {
            const { fieldErrors: errors } = err.flatten();
            const { password, confirmPassword, ...rest } = body;
            return {
               data: rest,
               errors,
            };
         }
      }
	}
};
