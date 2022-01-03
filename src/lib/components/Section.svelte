<script>
	export let id;
</script>

<article {...$$restProps} tabindex="0" {id}>
	<slot />
</article>

<style>
	article {
		@apply p-8;
		@apply print:px-0;
		page-break-inside: avoid;
	}
</style>
