<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
	import {
		Adidas,
		Chanel,
		CalvinKlein,
		Gucci,
		Dolce,
		Levi,
		Ecco,
		Nikke,
		Puma,
		Converse
	} from "$lib/components/svg";
	import { Blockquote, P } from "flowbite-svelte";
</script>

<Carousel />

<div class="flex flex-col gap-16 mt-8">
	<section>
		<h1 class="text-3xl font-semibold">Brands</h1>

		<div class="flex h-36 items-center justify-between">
			<Chanel />
			<CalvinKlein />
			<Gucci />
			<Dolce />
			<Adidas />
			<Levi />
			<Ecco />
			<Nikke />
			<Puma />
			<Converse />
		</div>
	</section>

	<section>
		<Blockquote
			border
			borderClass="border-l-2 border-primary-700 dark:border-white"
			baseClass="font-semibold not-italic pl-6 py-6 float-right"
		>
			<P class="text-primary-400 dark:text-white"
				>We ensure our customers have the best shopping experience</P
			>
		</Blockquote>
		<h1 class="text-3xl font-semibold">We provide best <br> customer experiences</h1>
	</section>
</div>
