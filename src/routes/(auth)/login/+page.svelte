<script lang="ts">
	import type { TextField } from "$lib/types";
	import TextInput from "$lib/components/TextInput.svelte";
	import AuthActions from "$lib/components/AuthActions.svelte";
	import AuthForm from "$lib/components/AuthForm.svelte";
	import { superForm } from "sveltekit-superforms/client";
   import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import type { PageData } from "./$types";
	import { LoginSchema } from "$lib/schemas";

	const fields: Array<TextField<"email" | "password">> = [
		{
			label: "Your email",
			type: "text",
			placeholder: "name@company.com",
			name: "email"
		},
		{
			label: "Password",
			type: "password",
			placeholder: "••••••••",
			name: "password"
		}
	];

	export let data: PageData;
	const { form, errors, enhance } = superForm(data.form, {
		taintedMessage: "Changes you made may not be saved.",
		validators: LoginSchema
	});
</script>

<SuperDebug data={$form} />

<AuthForm heading="Sign in to your account">
	<form class="space-y-4 md:space-y-6" use:enhance action="?/login" method="POST">
		{#each fields as field (field.name)}
			<TextInput {field} error={$errors[field.name]?.at(0)} bind:value={$form[field.name]} />
		{/each}

		<div class="flex items-center justify-between">
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input
						id="remember"
						aria-describedby="remember"
						type="checkbox"
						class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
					/>
				</div>

				<div class="ml-3 text-sm">
					<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
				</div>
			</div>

			<a href="/" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
				>Forgot password?</a
			>
		</div>

		<AuthActions btnText="Sign in" />
	</form>
</AuthForm>
