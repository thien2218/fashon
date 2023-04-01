<script lang="ts">
	import type { TextField } from "$lib/types";
	import TextInput from "$lib/components/TextInput.svelte";
	import AuthActions from "$lib/components/AuthActions.svelte";
	import AuthForm from "$lib/components/AuthForm.svelte";
   import { enhance } from "$app/forms";

	const fields: Array<TextField> = [
		{
			label: "Your email",
			type: "email",
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

   export let form;
   $: console.log(form);
</script>

<AuthForm heading="Create an account">
	<form class="space-y-4 md:space-y-6" use:enhance action="?/signup" method="POST">
		{#each fields as field (field.name)}
			<TextInput {field} />
		{/each}

		<AuthActions btnText="Sign up" />
	</form>
</AuthForm>
