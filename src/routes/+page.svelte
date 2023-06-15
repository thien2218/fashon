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
		Converse
	} from "$lib/components/svg";
	import { CircleDollarSign, PackagePlus, SmilePlus, Truck } from "lucide-svelte";
</script>

<Carousel />

<section class="mt-8">
	<h1 class="font-semibold text-3xl">Brands</h1>
	<div class="flex justify-around items-center py-8">
		<Adidas />
		<Chanel />
		<CalvinKlein />
		<Gucci />
		<Dolce />
		<Levi />
		<Ecco />
		<Nikke />
		<Converse />
	</div>
</section>

<section class="mt-8">
	<blockquote
		class="float-right border-l-2 border-primary pl-6 py-6 text-sm text-primary/40 font-medium"
	>
		We ensure our customers have the best shopping experience
	</blockquote>

	<h1 class="font-semibold text-3xl">We provide the best <br /> customer experiences</h1>

	<div class="grid grid-cols-4 gap-8 mt-14">
		<div class="flex flex-col gap-3">
			<div class="w-max bg-primary/10 rounded-md p-3">
				<CircleDollarSign size={18} />
			</div>

			<h2 class="font-semibold">Original Products</h2>

			<p class="text-sm font-medium text-primary/40">
				We provide moneyback guarantee if the product are not original
			</p>
		</div>

		<div class="flex flex-col gap-3">
			<div class="w-max bg-primary/10 rounded-md p-3">
				<SmilePlus size={18} />
			</div>

			<h2 class="font-semibold">Satisfaction Guarantee</h2>

			<p class="text-sm font-medium text-primary/40">
				Exchange the product you've purchased if it doesn't fit on you
			</p>
		</div>

		<div class="flex flex-col gap-3">
			<div class="w-max bg-primary/10 rounded-md p-3">
				<PackagePlus size={18} />
			</div>

			<h2 class="font-semibold">New Arrival Everyday</h2>

			<p class="text-sm font-medium text-primary/40">We update our collections almost everyday</p>
		</div>

		<div class="flex flex-col gap-3">
			<div class="w-max bg-primary/10 rounded-md p-3">
				<Truck size={18} />
			</div>

			<h2 class="font-semibold">Fast & Free Shipping</h2>

			<p class="text-sm font-medium text-primary/40">
				We offer fast and free shipping for our loyal customers
			</p>
		</div>
	</div>
</section>
