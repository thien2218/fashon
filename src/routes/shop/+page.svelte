<script lang="ts">
	import FilterItem from "$components/FilterItem.svelte";
	import MultiChoiceFilter from "$components/MultiChoiceFilter.svelte";
	import ProductCard from "$components/ProductCard.svelte";
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
			list: ["tops", "blouse", "trousers", "shorts", "swimsuit", "jacket"]
		},
		{
			title: "Brand",
			list: ["adidas", "chanel", "converse", "dolce", "ecco", "gucci"]
		},
		{
			title: "Fabric",
			list: [
				"cotton",
				"silk",
				"wool",
				"polyester",
				"linen",
				"nylon"
				//   "rayon",
				//   "denim",
				//   "velvet",
				//   "chiffon"
			]
		}
	];
</script>

<div class="grid xl:grid-cols-[16rem_1fr] lg:grid-cols-[16rem_1fr]">
	<div>
		<div class="p-3 border-[1.5px] border-primary/5 rounded-md max-h-min">
			<Accordion type="single" collapsible class="w-full mb-4">
				{#each items as item, i (i)}
					<MultiChoiceFilter item={{ id: i, ...item }} />
				{/each}

				<FilterItem title="Price" id="5" />
				<FilterItem title="Size" id="6" />
			</Accordion>

			<div class="grid grid-cols-2 gap-3">
				<Button class="w-full">Apply</Button>
				<Button class="w-full bg-slate-500 hover:bg-slate-500/90">Clear all</Button>
			</div>
		</div>
	</div>

	<div class="pl-4 space-y-6">
		<div class="text-sm">Got <span class="font-semibold">3704</span> results</div>

		<div class="h-9 flex items-center">
			<span class="text-sm">Applied filters:</span>
		</div>

		<div class="grid grid-cols-3 gap-x-4 gap-y-8">
			{#each Array(9).fill(0) as ele, i (i)}
				<ProductCard />
			{/each}
		</div>
	</div>
</div>
