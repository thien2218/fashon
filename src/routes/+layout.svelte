<script lang="ts">
	import { supabase } from "$lib/supabase";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
	import {
		createClient,
		setContextClient,
		dedupExchange,
		cacheExchange,
		fetchExchange
	} from "@urql/svelte";
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.css";

	const client = createClient({
		url: "https://libra.hasura.app/v1/graphql",
		exchanges: [dedupExchange, cacheExchange, fetchExchange],
		fetchOptions: () => {
			const headers = {
				"x-hasura-admin-secret": "Q54JROpNBNV0lG2M9tP0VtdFpJmtePRD4LYb9AK4LZiTh2lRV7o5OsjNa3k2BAak"
			};
			return { headers };
		}
	});

	setContextClient(client);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate("supabase:auth");
		});

		return () => subscription.unsubscribe();
	});
</script>

<slot />
