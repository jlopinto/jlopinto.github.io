<script>
	const { class: classNames = '' } = $$restProps;
</script>

<div class="sectionItem {classNames}">
	<div class="title">
		<slot name="body" />
		<slot name="media" />
	</div>
	<div class="media">
		<slot /> 
	</div>
</div>

<style type="postcss">
	.sectionItem {
		@apply md:grid md:grid-cols-12 md:gap-12 items-center md:items-start space-y-2 md:space-y-0;
		@apply print:grid print:grid-cols-12 print:gap-12 print:items-start print:space-y-0;
	}

	.title {
		@apply flex items-center md:block col-span-4 lg:col-span-3 md:text-right uppercase;
		@apply print:block print:col-span-3 print:text-right print:text-sm;
	}

	.media {
		@apply col-span-8 lg:col-span-9;
		@apply print:col-span-9;
	}
</style>
