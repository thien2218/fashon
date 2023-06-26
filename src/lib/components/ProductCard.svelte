<script>
	import { ShoppingBag } from "lucide-svelte";
	import Button from "./ui/button/Button.svelte";
	import { Card, CardContent, CardHeader } from "./ui/card";
</script>

<Card class="border-none shadow-none">
	<CardHeader class="relative mb-4 rounded-md p-4 overflow-hidden aspect-[10/11]">
		<img src="/thumbnail1.webp" alt="Test" class="absolute w-full h-auto min-h-full top-0 left-0" />
	</CardHeader>

	<CardContent class="p-0">
		<Button class="sm:px-0 px-0 aspect-square flex justify-center items-center float-right">
			<ShoppingBag size={16} />
		</Button>

		<h2>Autumn dress</h2>
		<p class="font-semibold text-xl mt-1">
			$58.60
			<span class="text-sm font-medium text-primary/50 ml-1.5 line-through decoration-primary/50">
				$80.99
			</span>
		</p>
	</CardContent>
</Card>
