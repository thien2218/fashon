<script lang="ts">
	import { getContextClient, gql, queryStore } from "@urql/svelte";

	const charactersQueryStore = queryStore({
		client: getContextClient(),
		query: gql`
			query MyQuery {
				books(limit: 10) {
					id
					title
				}
			}
		`
	});
</script>

<pre>{JSON.stringify($charactersQueryStore, null, 2)}</pre>
