<script lang="ts">
	import type { TextField } from "$lib/types";
	import AuthForm from "./AuthForm.svelte";
	import TextInput from "./TextInput.svelte";

	const fields: Array<TextField> = [
		{
			label: "Username",
			type: "text",
			name: "username",
			placeholder: "Enter your username",
			required: true
		},
		{
			label: "First name",
			type: "text",
			name: "firstname",
			placeholder: "John",
			required: true
		},
		{
			label: "Last name",
			type: "text",
			name: "lastname",
			placeholder: "Doe",
			required: true
		},
		{
			label: "Phone number",
			type: "tel",
			name: "phone",
			placeholder: "123-45-678",
			required: true
		}
	];
</script>

<AuthForm heading="Create a profile">
	<form action="">
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			{#each fields as field, i (field.name)}
				<TextInput {field} classname={i % 3 === 0 ? "sm:col-span-2" : ""} />
			{/each}
		</div>

		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Create
		</button>
	</form>
</AuthForm>
