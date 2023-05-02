<script lang="ts">
   type Headers = {
      "x-hasura-role": string,
      Authorization?: string,
   }

	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.css";
	import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
	import type { PageData } from "./$types";
	import { supabase } from "$lib/supabase";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
	import {
		createClient,
		setContextClient,
		dedupExchange,
		cacheExchange,
		fetchExchange,

		defaultExchanges

	} from "@urql/svelte";

	export let data: PageData;
	$: ({ session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate("supabase:auth");
		});

		return () => subscription.unsubscribe();
	});

	const client = createClient({
		url: PUBLIC_GRAPHQL_URL,
		exchanges: [...defaultExchanges],
		fetchOptions: () => {
			const headers: Headers = {
				"x-hasura-role": session ? "reader" : "anon",
			};

         if (session) {
            headers.Authorization = `Bearer ${session.access_token}`;
         }

			return { headers };
		}
	});

	setContextClient(client);
</script>

<slot />
