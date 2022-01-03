<script>
	import { getWords } from '$lib/utils';
	export let monthLength = 16 * 12;
	export let skill = '';
	export let nbProjets = '0';
	export let affinity = 0;
	const { class: classNames = '' } = $$restProps;
</script>

<div class="skillbar {classNames}">
	<div>{skill}</div>
	<div>{nbProjets}</div>
	<div>{getWords(monthLength)}</div>
	{#if affinity > 0}
		<div class="skillbar__affinity">
			<span class="sr-only">{(100 * affinity) / 5}%</span>
			<div class="skillbar__affinity-bar" style="width:{(100 * affinity) / 5}%;" />
		</div>
	{/if}
</div>

<style>
	.skillbar {
		@apply grid grid-cols-4 last:border-0 border-b dark:border-indigo-700 gap-6 py-1 text-sm print:text-xs items-center;
	}

	.skillbar__affinity {
		@apply bg-indigo-100 flex rounded overflow-hidden h-2;
	}

	.skillbar__affinity-bar {
		@apply bg-indigo-700;
	}

	@media print {
		.skillbar {
			@apply border-gray-200;
		}
	}
</style>
