<script lang="ts">
	type Headers = {
		"x-hasura-role": string;
		Authorization?: string;
	};

	import "../app.css";
	import { PUBLIC_HASURA_GRAPHQL_API } from "$env/static/public";
	import type { PageData } from "./$types";
	import { supabase } from "$lib/supabase";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
	import Header from "$lib/components/Header.svelte";

	import {
		createClient,
		setContextClient,
		dedupExchange,
		cacheExchange,
		fetchExchange
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
		url: PUBLIC_HASURA_GRAPHQL_API,
		exchanges: [dedupExchange, cacheExchange, fetchExchange],
		fetchOptions: () => {
			const headers: Headers = {
				"x-hasura-role": session ? "reader" : "anon"
			};

			if (session) {
				headers.Authorization = `Bearer ${session.access_token}`;
			}

			return { headers };
		}
	});

	setContextClient(client);
</script>

<Header />

<main class="container pt-20 sm:pt-24 pb-8">
	<slot />
</main>
