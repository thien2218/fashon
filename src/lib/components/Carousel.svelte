<script lang="ts">
	import Carousel from "svelte-carousel";
	import { browser } from "$app/environment";
	import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-svelte";
	import Button from "./ui/button/Button.svelte";

	const carouselProps = {
		autoplay: true,
		autoplayDuration: 4000,
		duration: 750,
		swiping: false,
		timingFunction: "ease-out"
	};

	const images = [
		{
			alt: "Fashion thumbnail 1",
			src: "/thumbnail1.webp",
			caption: "Shop the latest trends and must-have styles"
		},
		{
			alt: "Fashion thumbnail 2",
			src: "/thumbnail2.webp",
			caption: "Level up your style with our summer collections"
		},
		{
			alt: "Fashion thumbnail 3",
			src: "/thumbnail3.webp",
			caption: "Explore endless style possibilities"
		},
		{
			alt: "Fashion thumbnail 5",
			src: "/thumbnail5.webp",
			caption: "Experience the essence of premier Brands"
		},
		{
			alt: "Fashion thumbnail 4",
			src: "/thumbnail4.webp",
			caption: "Find your perfect look today"
		}
	];

	const onArrowKey = (e: KeyboardEvent, cb: Function) => {
		if (e.code === "Space" || e.code === "Enter") cb();
	};
</script>

{#if browser}
	<div class="relative rounded-lg md:rounded-lg overflow-hidden flex">
		<Carousel
			let:loaded
			let:showPrevPage
			let:showNextPage
			let:pagesCount
			let:currentPageIndex
			let:showPage
			{...carouselProps}
		>
			<!-- List of images with captions -->
			{#each images as { src, alt, caption }, imgId (src)}
				<div
					class="relative h-52 ks:h-80 sm:h-64 md:h-96 lg:h-[32rem] xl:h-[36rem] w-full flex items-end justify-center"
				>
					{#if loaded.includes(imgId)}
						<div
							class="absolute inset-0 bg-black/40 md:px-16 sm:px-12 px-8 text-white xl:text-7xl lg:text-6xl md:text-5xl ks:text-4xl sm:text-3xl text-2xl leading-[1.125] font-semibold text-center flex items-center justify-center"
						>
							<div class="relative -translate-y-1/3">
								{caption}
							</div>
						</div>

						<img {src} {alt} class="min-h-full" />
					{/if}
				</div>
			{/each}

			<!-- Navigation dots and Shop now button -->
			<div
				slot="dots"
				class="absolute flex flex-col items-center mx-auto sm:mb-3 md:mb-6 lg:mb-24 bottom-0"
			>
				<div class="max-w-max md:mb-10 mb-6">
					<Button class="ks:text-sm text-xs" variant="secondary" href="/">
						<div class="flex items-center ks:gap-1.5 gap-1">
							<span>Shop now</span>
							<ArrowRight class="ks:w-4 w-3.5 aspect-square" />
						</div>
					</Button>
				</div>

				<div class="flex items-center justify-center flex-wrap px-8">
					{#each Array(pagesCount) as _, pageIndex (pageIndex)}
						<div class="sm:h-5 sm:w-4 h-4 w-2.5 flex items-center justify-center">
							<button
								on:click={() => showPage(pageIndex)}
								class={`bg-white rounded-full inline-block ${
									currentPageIndex === pageIndex
										? "opacity-90 sm:h-2 h-1.5 aspect-square"
										: "opacity-50 sm:h-1.5 h-1 aspect-square"
								}`}
							/>
						</div>
					{/each}
				</div>
			</div>

			<!-- Show prev slide navigation button -->
			<div slot="prev" class="absolute z-10 right-0 lg:m-8 sm:m-6 m-4 pointer-events-none">
				<div
					on:click={showPrevPage}
					on:keydown={(e) => onArrowKey(e, showNextPage)}
					class="lg:h-12 md:h-9 sm:h-8 h-7 aspect-square flex justify-center items-center bg-white hover:bg-white/90 lg:rounded-tl-lg lg:rounded-bl-lg md:rounded-tl-md md:rounded-bl-md rounded-tl rounded-bl border-r border-r-primary-300 cursor-pointer lg:mr-12 md:mr-9 sm:mr-8 mr-7 pointer-events-auto [&>svg]:pointer-events-none"
				>
					<ChevronLeft class="lg:w-6 md:w-5 sm:w-[18px] w-4 aspect-square" />
				</div>
			</div>

			<!-- Show next slide navigation button -->
			<div slot="next" class="absolute right-0 lg:m-8 sm:m-6 m-4 pointer-events-none">
				<div
					on:click={showNextPage}
					on:keydown={(e) => onArrowKey(e, showNextPage)}
					class="lg:h-12 md:h-9 sm:h-8 h-7 aspect-square flex justify-center items-center bg-white hover:bg-white/90 hover:bg-primary-100 lg:rounded-tr-lg lg:rounded-br-lg md:rounded-tr-md md:rounded-br-md rounded-tr rounded-br cursor-pointer pointer-events-auto [&>svg]:pointer-events-none"
				>
					<ChevronRight class="lg:w-6 md:w-5 sm:w-[18px] w-4 aspect-square" />
				</div>
			</div>
		</Carousel>
	</div>
{/if}
