<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/variables.css';

	let { children } = $props();
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head> -->

{@render children()}


<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: var(--background);
		font-family: 'Roboto', sans-serif;
		color: #1C398E;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Roboto Mono', monospace;
	}
</style>