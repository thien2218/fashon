<script lang="ts">
	import type { Reviews_Aggregate } from "$lib/graphql/generated";
   import StarRating from "./StarRating.svelte";

	export let id: string;
	export let title: string;
	export let price: number;
	export let authors: string;
   export let reviews_aggregate: Omit<Reviews_Aggregate, "nodes">;
	// export let cover_url: string;
</script>

<div class="card bg-transparent ring-0 min-w-0 max-w-full">
	<header class="rounded-lg overflow-hidden w-full aspect-[100/135] mb-2">
		<a href={`/book/${id}`}>
			<img
				src="https://uuwbymbbejhhuyixfsyj.supabase.co/storage/v1/object/public/book-covers/default_cover.jpeg"
				class="w-full h-full"
				alt={title}
			/>
		</a>
	</header>

	<section class="font-medium truncate mb-[2px]">
		<a href={`/book/${id}`}>{title}</a>
	</section>

	<section class="text-sm text-gray-500 mb-1 truncate">{JSON.parse(authors).join(", ")}</section>

	<footer>
		<StarRating rating={3} />

		<button type="button" class="btn variant-filled text-sm px-3.5">${price}</button>
	</footer>
</div>
