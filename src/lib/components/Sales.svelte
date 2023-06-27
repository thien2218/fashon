<script>
	import { ArrowRight } from "lucide-svelte";
	import Button from "./ui/button/Button.svelte";
	import Section from "./Section.svelte";
</script>

<Section title="">
	<div class="relative flex justify-end w-full rounded-md overflow-hidden h-80">
		<div class="w-3/5 h-full bg-primary flex flex-col gap-4 justify-center text-secondary px-10">
			<small class="font-medium text-secondary/50">LIMITED OFFER</small>
			<h1 class="font-medium text-5xl mb-4">35% off only this friday and get special gift</h1>
			<Button class="w-max hover:bg-secondary/90 hover:text-primary" variant="secondary">
				Grab it now
				<ArrowRight class="ks:w-4 w-3.5 aspect-square" />
			</Button>
		</div>

		<img src="/thumbnail2.webp" alt="Test" class="absolute w-1/2 left-0 top-0 min-h-full z-[-1]" />
	</div>
</Section>
