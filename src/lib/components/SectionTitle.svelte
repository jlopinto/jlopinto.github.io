<script type="ts">
	export let title;
	export let id = '';
	const { class: classNames = '', ...rest } = $$restProps;
</script>

<div class="sectionTitle {classNames}" {...rest}>
	<h2 class="title" {id}>{title}</h2>
	<div class="media">
		<hr class="line" />
	</div>
</div>

<style type="postcss">
	.sectionTitle {
		@apply flex md:grid md:grid-cols-12 gap-4 md:gap-12 text-indigo-700 dark:text-gray-100;
		@apply print:flex print:gap-6;
	}

	.title {
		@apply sm:col-span-4 lg:col-span-3 flex items-center justify-end font-bold uppercase text-2xl;
		@apply print:justify-start;
	}

	.media {
		@apply sm:col-span-8 lg:col-span-9 flex flex-1 items-center ml-4 md:ml-0;
		@apply print:col-span-8;
	}

	.line {
		@apply bg-gradient-to-r from-indigo-700 to-indigo-400 h-1 w-full rounded-full border-0;
	}

	@media print {
		.title {
			@apply text-black;
		}
	}
</style>
