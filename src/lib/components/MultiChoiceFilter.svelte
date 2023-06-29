<script lang="ts">
	import { capitalize } from "$lib/utils/capitalize";
	import FilterItem from "./FilterItem.svelte";
	import { Checkbox } from "./ui/checkbox";
	import { Label } from "./ui/label";

	type Item = {
		id: number;
		title: string;
		list: Array<string>;
	};

	export let item: Item;

	let checked: Array<boolean> = Array(item.list.length).fill(false);
</script>

<FilterItem title={item.title} id={item.id.toString()}>
	{#each item.list as element, i (i)}
		<div class="flex items-center gap-3">
			<Checkbox id={element} bind:checked={checked[i]} />
			<Label class="font-normal" for={element}>{capitalize(element)}</Label>
		</div>
	{/each}
</FilterItem>
