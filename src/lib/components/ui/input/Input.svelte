<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import { Search } from "lucide-svelte";

	let className: string | undefined | null = undefined;

	export let value: HTMLInputAttributes["value"] = undefined;
	export { className as class };
</script>

<div class="absolute px-3 pointer-events-none">
	<Search class="stroke-muted-foreground w-[1.125rem] aspect-square stroke-[1.75px]" />
</div>

<input
	class={cn(
		"flex h-10 w-full rounded-md border-[1.5px] border-input bg-transparent pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
/>
