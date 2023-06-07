<script lang="ts">
	import Carousel from "svelte-carousel";
	import { browser } from "$app/environment";
	import { ArrowRight, ChevronLeft, ChevronRight } from "svelte-heros-v2";
	import { Button } from "flowbite-svelte";

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
		},
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
					class="relative h-52 xs:h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] w-full flex items-end justify-center"
				>
					{#if loaded.includes(imgId)}
						<div
							class="absolute inset-0 bg-black/40 md:px-16 sm:px-12 px-8 text-white lg:text-[72px] md:text-[56px] sm:text-[48px] xs:text-[32px] text-[24px] leading-[1.125] font-semibold text-center flex items-center justify-center"
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
					<Button btnClass="bg-white py-2.5 px-[18px] rounded-lg text-primary-600 text-xs xs:text-sm sm:text-base md:text-lg hover:bg-primary-700 hover:text-white transition duration-300">
						<div class="flex items-center gap-1.5">
							<span>Shop now</span>
							<ArrowRight strokeWidth="2.5" class="sm:h-4 sm:w-4 h-3 w-3" />
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
					class="lg:h-12 md:h-9 sm:h-8 h-7 aspect-square flex justify-center items-center bg-white hover:bg-primary-100 rounded-tl-lg rounded-bl-lg border-r border-r-primary-300 cursor-pointer lg:mr-12 md:mr-9 sm:mr-8 mr-7 pointer-events-auto [&>svg]:pointer-events-none [&>svg]:hover:text-primary-700"
				>
					<ChevronLeft
						strokeWidth="2"
						class="lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3.5 sm:w-3.5 h-3 w-3 text-primary-500"
					/>
				</div>
			</div>

         <!-- Show next slide navigation button -->
			<div slot="next" class="absolute right-0 lg:m-8 sm:m-6 m-4 pointer-events-none">
				<div
					on:click={showNextPage}
					on:keydown={(e) => onArrowKey(e, showNextPage)}
					class="lg:h-12 md:h-9 sm:h-8 h-7 aspect-square flex justify-center items-center bg-white hover:bg-primary-100 rounded-tr-lg rounded-br-lg cursor-pointer pointer-events-auto [&>svg]:pointer-events-none [&>svg]:hover:text-primary-700"
				>
					<ChevronRight
						strokeWidth="2"
						class="lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3.5 sm:w-3.5 h-3 w-3 text-primary-500"
					/>
				</div>
			</div>
		</Carousel>
	</div>
{/if}
