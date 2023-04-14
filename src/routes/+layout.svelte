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
	import type { PageData } from "./$types";

   export let data: PageData;
   $: ({ session } = data);

	const client = createClient({
		url: "https://libra.hasura.app/v1/graphql",
		exchanges: [dedupExchange, cacheExchange, fetchExchange],
		fetchOptions: () => {
			const headers = {
            "Authorization": `Bearer ${session?.access_token}`
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
