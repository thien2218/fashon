<script lang="ts">
	import { Logo } from "$lib/components/svg";
	import Input from "./ui/input/Input.svelte";
	import { Search, ShoppingCart, UserCircle } from "lucide-svelte";
</script>

<header class="fixed inset-x-0 top-0 py-6 z-50 bg-white dark:bg-primary">
	<div class="container flex justify-between items-center">
		<a href="/">
			<Logo />
		</a>

		<ul class="md:flex hidden lg:gap-8 gap-6">
			<li class="text-sm font-medium hover:text-primary/80">
				<a href="/">Shop</a>
			</li>
			<li class="text-sm font-medium hover:text-primary/80">
				<a href="/">Most wanted</a>
			</li>
			<li class="text-sm font-medium hover:text-primary/80">
				<a href="/">New arrival</a>
			</li>
		</ul>

		<div class="flex items-center gap-6">
			<div class="relative flex items-center">
				<div class="absolute px-3 pointer-events-none">
					<Search class="stroke-muted-foreground w-[1.125rem] aspect-square stroke-[1.75px]" />
				</div>

				<Input type="email" placeholder="Search..." />
			</div>
			<a href="/">
				<ShoppingCart
					class="sm:w-[1.125rem] w-4 sm:stroke-[2.25px] aspect-square hover:stroke-primary/80"
				/>
			</a>
			<a href="/">
				<UserCircle
					class="sm:w-[1.125rem] w-4 sm:stroke-[2.25px] aspect-square hover:stroke-primary/80"
				/>
			</a>
		</div>
	</div>
</header>
