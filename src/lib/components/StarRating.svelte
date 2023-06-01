<script lang="ts">
	import StarRating from "svelte-star-rating";

   export let rating: number;

   const config = {
		emptyColor: "#dbdbdb",
		fullColor: "#ffc108",
		size: 16
   }
</script>

<StarRating {rating} {config} />
