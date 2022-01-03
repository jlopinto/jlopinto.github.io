<script>
	export let id;
</script>

<div {id} class="quick-nav">
	<slot />
</div>

<style>
	.quick-nav {
		@apply focus:not-sr-only focus-within:not-sr-only sr-only focus:relative focus:z-10 focus-within:relative focus-within:z-10 print:hidden;
		outline: rgba(0, 0, 0, 0.5) solid 999rem;
	}
</style>
