<script lang="ts">
	import Brands from "$components/Brands.svelte";
	import Featured from "$components/Featured.svelte";
	import Offers from "$components/Offers.svelte";
	import Currated from "$components/Currated.svelte";
	import Carousel from "$lib/components/Carousel.svelte";
	import Sales from "$components/Sales.svelte";
	import Subscribe from "$components/Subscribe.svelte";
</script>

<Carousel />

<div class="flex flex-col gap-8">
	<Brands />
	<Offers />
	<Currated />
	<Featured />
	<Sales />
	<Subscribe />
</div>
