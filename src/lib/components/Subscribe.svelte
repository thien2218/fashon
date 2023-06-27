<script>
	import { Mail } from "lucide-svelte";
	import Button from "./ui/button/Button.svelte";
	import Input from "./ui/input/Input.svelte";
</script>

<div class="text-center flex justify-center py-12">
	<div class="w-full max-w-xl flex flex-col items-center gap-8">
		<div>
			<h1 class="font-semibold text-[26px] mb-3">
				Subscribe to our newsletter to get updates to our latest collections
			</h1>

			<p class="text-sm text-primary/50 font-medium">
				Get 20% off on your first order just by subscribing to our newsletter
			</p>
		</div>

		<div>
			<div class="flex gap-2 mb-3">
				<div class="relative">
					<div class="absolute h-full top-0 left-0 flex items-center px-3">
						<Mail
							class="stroke-muted-foreground w-[1.125rem] aspect-square stroke-[1.75px]"
							size={16}
						/>
					</div>
					<Input placeholder="Enter your email" />
				</div>
				<Button>Subscribe</Button>
			</div>

			<small class="text-primary/40 font-medium">
				You will be able to unsubscribe at any time. <br />
				Read our Privacy Policy <a href="/" class="text-primary underline">here</a>
			</small>
		</div>
	</div>
</div>
