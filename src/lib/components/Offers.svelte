<script>
	import { CircleDollarSign, PackagePlus, SmilePlus, Truck } from "lucide-svelte";
	import Section from "./Section.svelte";
	const title = "We provide the best <br /> customer experiences";
</script>

<Section {title}>
	<blockquote
		slot="blockquote"
		class="float-right border-l-2 border-primary pl-6 py-6 text-sm text-primary/40 font-medium"
	>
		We ensure our customers have the best shopping experience
	</blockquote>

	<div class="grid grid-cols-4 gap-8 mt-12">
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
</Section>
