<script lang="ts">
   import type { TextField } from "$lib/types";

   export let classname: string = "";
   export let field: TextField<string>;
   export let error: string = "";
   export let value: string;

	function typeAction(node: HTMLInputElement) {
		node.type = field.type;
	}
</script>

<div class={classname}>
   <label for={field.name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{field.label}</label
   >

   <input
      name={field.name}
      id={field.name}
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={field.placeholder}
      use:typeAction
      bind:value={value}
   />

   <small>{error ? error : ""}</small>
</div>