<script>
	import { Facebook, Instagram, Github, Twitter } from "./svg";
	import Logo from "./svg/Logo.svelte";
</script>

<footer class="bg-white dark:bg-gray-800 container">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between py-14">
			<div class="mb-4 md:mb-0">
				<a href="/" class="flex items-center">
					<Logo />
				</a>
			</div>

			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
				<div>
					<h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">SHOP</h2>

					<ul class="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-sm">
						<li>
							<a href="/" class="hover:underline text-primary/60">All collection</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Winter edition</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Discount</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						COMPANY
					</h2>

					<ul class="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-sm">
						<li>
							<a href="/" class="hover:underline text-primary/60">About Us</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Contact</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Github</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						SUPPORT
					</h2>

					<ul class="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-sm">
						<li>
							<a href="/" class="hover:underline text-primary/60">FAQs</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Privacy Policy</a>
						</li>
						<li>
							<a href="/" class="hover:underline text-primary/60">Terms &amp; Conditions</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						PAYMENT METHODS
					</h2>

					<ul class="text-gray-600 dark:text-gray-400 flex flex-col gap-2 text-sm" />
				</div>
			</div>
		</div>

		<hr class="border-gray-200 sm:mx-auto dark:border-gray-700" />

		<div class="sm:flex sm:items-center sm:justify-between py-8">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				Copyright © 2022
				<a href="https://flowbite.com" class="hover:underline text-primary/60"> Fashon™ </a>. All
				Rights Reserved.
			</span>
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<Facebook />
				</a>
				<a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<Instagram />
				</a>
				<a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<Twitter />
				</a>
				<a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					<Github />
				</a>
			</div>
		</div>
	</div>
</footer>
