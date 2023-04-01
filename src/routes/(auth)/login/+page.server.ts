import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { LoginSchema } from "$lib/schemas";

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

      throw redirect(303, "/");
	}
};
