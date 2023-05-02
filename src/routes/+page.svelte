<script lang="ts">
	import BookCard from "$lib/components/BookCard.svelte";
	import { GetBooksQueryDocument } from "$lib/gql/generated";
	import { getContextClient, queryStore } from "@urql/svelte";

	const books = queryStore({
		client: getContextClient(),
		query: GetBooksQueryDocument
	});
</script>

<!-- <pre>{JSON.stringify($books, null, 2)}</pre> -->
<!-- <BookCard imgSrc={$books.data?.books[0].cover_url} /> -->
