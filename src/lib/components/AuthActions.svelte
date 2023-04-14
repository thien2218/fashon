<script lang="ts">
	export let btnText: "Sign in" | "Sign up";
</script>

<div>
	<button
		type="submit"
		class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
	>
		{btnText}
	</button>

	<div class="inline-flex items-center justify-center w-full">
		<hr class="w-64 h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
		<span
			class="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
			>or</span
		>
	</div>

	<button
		type="button"
		class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full"
	>
		<svg
			class="w-4 h-4 mr-2 -ml-1"
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="google"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 488 512"
			><path
				fill="currentColor"
				d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
			/></svg
		>
		Sign in with Google
	</button>
</div>

<p class="text-sm font-light text-gray-500 dark:text-gray-400">
	{#if btnText === "Sign in"}
		Don&apos;t have an account yet? <a
			href="/signup"
			class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a
		>
	{:else}
		Already have an account? <a
			href="/login"
			class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a
		>
	{/if}
</p>
