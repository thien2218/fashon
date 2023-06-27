<script>
	import { Card, CardContent, CardHeader } from "./ui/card";
</script>

<Card class="border-none shadow-none">
	<CardHeader class="relative mb-4 rounded-md p-4 overflow-hidden aspect-[10/11]">
		<img src="/thumbnail1.webp" alt="Test" class="absolute w-full h-auto min-h-full top-0 left-0" />
	</CardHeader>

	<CardContent class="p-0">
		<div class="flex justify-between mb-2">
			<h2>Autumn dress</h2>
			<p class="font-semibold text-xl">$58.60</p>
		</div>

		<div class="flex justify-between">
			<ul class="flex gap-2">
				<li>
					<div class="rounded-full h-4 w-4 bg-slate-600" />
				</li>
				<li>
					<div class="rounded-full h-4 w-4 bg-slate-800" />
				</li>
			</ul>

			<p class="text-sm font-medium text-primary/50 ml-1.5 line-through decoration-primary/50">
				$80.99
			</p>
		</div>
	</CardContent>
</Card>
