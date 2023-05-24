<script lang="ts">
	import type { GetBooksQuery } from "$lib/graphql/generated";
	import BookCard from "./BookCard.svelte";

	export let booksData: GetBooksQuery | undefined;
</script>

<div class="w-full grid lg:grid-cols-6 grid-cols-3 gap-8">
	{#if booksData}
		{#each booksData?.books as book}
			{#if book.quantity > 0}
				<div class="flex justify-center">
					<BookCard {...book} />
				</div>
			{/if}
		{/each}
	{/if}
</div>
