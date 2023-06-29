<script lang="ts">
	import FilterItem from "$components/FilterItem.svelte";
	import MultiChoiceFilter from "$components/MultiChoiceFilter.svelte";
	import { Accordion } from "$components/ui/accordion";
	import Button from "$components/ui/button/Button.svelte";

	// "Category", "Style", "Brands", "Fabric", "Price", "Size"
	const items = [
		{
			title: "Category",
			list: ["women", "men", "kids", "sporty", "casual"]
		},
		{
			title: "Style",
			list: ["women", "men", "kids", "sporty", "casual"]
		},
		{
			title: "Brand",
			list: ["women", "men", "kids", "sporty", "casual"]
		},
		{
			title: "Fabric",
			list: ["women", "men", "kids", "sporty", "casual"]
		}
	];
</script>

<div class="grid xl:grid-cols-[18rem_1fr] lg:grid-cols-[16rem_1fr]">
	<div class="p-3 border-[1.5px] border-primary/5 rounded-md">
		<Accordion type="single" collapsible class="w-full mb-4">
			{#each items as item, i (i)}
				<MultiChoiceFilter item={{ id: i, ...item }} />
			{/each}

			<FilterItem title="Price" id="5" />
			<FilterItem title="Size" id="6" />
		</Accordion>

		<div class="grid grid-cols-2 gap-4">
			<Button class="w-full">Apply</Button>
			<Button class="w-full bg-slate-500 hover:bg-slate-500/90">Clear</Button>
		</div>
	</div>

	<!-- PRODUCTS -->
</div>
