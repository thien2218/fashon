<script lang="ts">
	import BookGridLayout from "$lib/components/BookGridLayout.svelte";
	import { getContextClient, queryStore } from "@urql/svelte";
	import { GetBooksDocument } from "$lib/graphql/generated.d";

	const store = queryStore({
		client: getContextClient(),
		query: GetBooksDocument
	});

	$: ({ data, fetching } = $store);
</script>

{#if fetching}
	<div>Loading...</div>
{:else}
	<BookGridLayout booksData={data} />
{/if}
