<script>
	import ProductCard from "./ProductCard.svelte";
	import Section from "./Section.svelte";
</script>

<Section title="Featured products">
	<div class="mt-8 grid grid-cols-3 gap-6">
		{#each [1, 2, 3] as example}
			<ProductCard />
		{/each}
	</div>
</Section>
