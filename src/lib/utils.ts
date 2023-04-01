import type { ZodSchema } from "zod"

export const validateData = async (request: Request, schema: ZodSchema) => {
   const body = await request.formData();
   const result = schema.safeParse(body);

   if (result.success) {
      return {
         data: result.data,
         errors: null
      }
   }
   
   const { fieldErrors: errors } = result.error.flatten();
   return {
      data: body,
      errors
   }
}