<script lang="ts">
	import { supabase } from "$lib/supabase";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
   import '@skeletonlabs/skeleton/styles/all.css';
   import '../app.css';
                     
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
