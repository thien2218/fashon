import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { LoginSchema } from "$lib/schemas";
import { AuthApiError } from "@supabase/supabase-js";

export const load: PageServerLoad = async (event) => {
   const form = await superValidate(event, LoginSchema);
   return {
      form
   }
};

export const actions: Actions = {
	login: async (event) => {
      const form = await superValidate(event, LoginSchema);
      
      if (!form.valid) {
         return fail(400, { form });
      }

      const { error: err } = await event.locals.sb.auth.signInWithPassword({
         email: form.data.email,
         password: form.data.password,
      });

      if (err) {
         if (err instanceof AuthApiError && err.status === 400) {
            return fail(400, {
               error: "Invalid email or password"
            });
         }

         return fail(500, {
            error: "Server error. Please try again later."
         });
      }

      throw redirect(303, "/");
	}
};
