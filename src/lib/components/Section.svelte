<script lang="ts">
	export let title: string;
</script>

<section class="mt-8">
	<slot name="blockquote" />
	<h1 class="font-semibold text-3xl">{@html title}</h1>

	<slot />
</section>
