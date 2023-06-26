<script>
	import { ArrowRight } from "lucide-svelte";
	import Section from "./Section.svelte";
	import Button from "./ui/button/Button.svelte";

	const cards = [
		{
			alt: "Fashion thumbnail 1",
			src: "/thumbnail1.webp",
			category: "Best Seller"
		},
		{
			alt: "Fashion thumbnail 2",
			src: "/thumbnail2.webp",
			category: "Women"
		},
		{
			alt: "Fashion thumbnail 3",
			src: "/thumbnail3.webp",
			category: "Men"
		},
		{
			alt: "Fashion thumbnail 4",
			src: "/thumbnail4.webp",
			category: "Casual"
		}
	];
</script>

<Section title="Currated picks">
	<div class="grid grid-cols-4 gap-6 mt-8">
		{#each cards as card}
			<div
				class="relative w-full aspect-square p-8 flex items-end justify-center overflow-hidden rounded-md bg-black/20"
			>
				<Button class="flex justify-between w-full max-w-[12rem]" variant="secondary">
					<p>Shop {card.category}</p>
					<ArrowRight class="ks:w-4 w-3.5 aspect-square" />
				</Button>

				<img src={card.src} alt={card.alt} class="min-h-full absolute z-[-1] inset-0" />
			</div>
		{/each}
	</div>
</Section>
