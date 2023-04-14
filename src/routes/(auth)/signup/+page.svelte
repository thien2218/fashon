<script lang="ts">
	import type { TextField } from "$lib/types";
	import TextInput from "$lib/components/TextInput.svelte";
	import AuthActions from "$lib/components/AuthActions.svelte";
	import AuthForm from "$lib/components/AuthForm.svelte";
	import { superForm } from "sveltekit-superforms/client";
	import type { PageData } from "./$types";
	import { SignupSchema } from "$lib/schemas";

	const fields: Array<TextField<"email" | "password" | "confirmPassword">> = [
		{
			label: "Your email",
			type: "text",
			placeholder: "name@company.com",
         name: "email",
		},
		{
			label: "Password",
			type: "password",
			placeholder: "••••••••",
         name: "password",
		},
		{
			label: "Confirm password",
			type: "password",
			placeholder: "••••••••",
         name: "confirmPassword",
		}
	];

   export let data: PageData;
   const { form, errors, enhance } = superForm(data.form, {
      taintedMessage: "Changes you made may not be saved.",
      validators: SignupSchema
   });
</script>

<AuthForm heading="Create an account">
	<form class="space-y-4 md:space-y-6" use:enhance action="?/signup" method="POST">
		{#each fields as field (field.name)}
			<TextInput {field} error={$errors[field.name]?.at(0)} bind:value={$form[field.name]} />
		{/each}

		<AuthActions btnText="Sign up" />
	</form>
</AuthForm>
