<script>
	import { CarouselTransition } from "flowbite-svelte";

	const showThumbs = false;
	const images = [
		{
			id: 0,
			name: "Thumbnail 1",
			imgurl: "/thumbnail1.webp"
		},
		{
			id: 1,
			name: "Thumbnail 2",
			imgurl: "/thumbnail2.webp"
		},
		{
			id: 2,
			name: "Thumbnail 3",
			imgurl: "/thumbnail3.webp"
		},
		{
			id: 3,
			name: "Thumbnail 4",
			imgurl: "/thumbnail4.webp"
		},
		{
			id: 4,
			name: "Thumbnail 5",
			imgurl: "/thumbnail5.webp"
		}
	];
</script>

<CarouselTransition
	divClass="overflow-hidden relative h-64 rounded-lg sm:h-96 xl:h-[36rem] [&>div]:relative [&>div]:top-1/2 [&>div]:-translate-y-1/2"
   transitionType="slide"
	{images}
	{showThumbs}
   showCaptions={false}
/>
