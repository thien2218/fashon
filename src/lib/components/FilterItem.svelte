<script lang="ts">
	import { AccordionContent, AccordionItem, AccordionTrigger } from "$components/ui/accordion";

	export let title: string;
	export let id: string;
</script>

<AccordionItem value={id}>
	<AccordionTrigger class="font-normal bg-transparent px-4 py-2 my-2 rounded-md hover:no-underline">
		{title}
	</AccordionTrigger>

	<AccordionContent>
		<div class="pl-6 pr-4 space-y-6 mb-6 mt-2">
			<slot />
		</div>
	</AccordionContent>
</AccordionItem>
