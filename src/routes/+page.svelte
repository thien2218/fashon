<script lang="ts">
	import BookCard from "$lib/components/BookCard.svelte";
	import { getContextClient, queryStore } from "@urql/svelte";
   import { GetBooksDocument } from "$lib/graphql/generated.d";

   const store = queryStore({
      client: getContextClient(),
      query: GetBooksDocument,
   });

   const { data } = $store
   console.log(data);
</script>

<pre>{JSON.stringify($store, null, 2)}</pre>
<!-- <BookCard imgSrc={data?.books[0].cover_url ?? ""} /> -->
