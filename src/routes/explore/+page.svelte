<script lang="ts">
	import BookCard from "$lib/components/BookCard.svelte";
	import { getContextClient, queryStore } from "@urql/svelte";
   import { GetBooksDocument } from "$lib/graphql/generated.d";

   const store = queryStore({
      client: getContextClient(),
      query: GetBooksDocument,
   });

   $: ({ data, fetching } = $store);
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
<!-- <BookCard imgSrc={data?.books[0].cover_url ?? ""} /> -->
