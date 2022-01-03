<script type="ts">
	export let title;
	export let id;
	export let small = true;
	export let normal = false;
	export let big = false;
	export let printable = true;
	const { class: classNames = '' } = $$restProps;
</script>

<div class="flex w-full h-full items-center justify-center">
	<svg
		class="embed-responsive-item {classNames}"
		role="img"
		aria-label={title}
		class:small
		class:normal
		class:big
	>
		<use xlink:href="#{id}" aria-hidden="true" />
	</svg>
	{#if printable}
		<div class="flex-grow ml-2" class:showText={printable}>{title}</div>
	{/if}
</div>

<style type="postcss">
	.big {
		@apply w-12 h-12;
	}

	.small {
		@apply w-5 h-5;
	}

	.normal {
		@apply w-8 h-8;
	}

	svg {
		@apply w-full h-full block;
	}

	.showText {
		@apply print:block screen:hidden;
	}
</style>
