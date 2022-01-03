<script>
	export let datetime;
</script>

<time {datetime}><slot /></time>

<style>
	time {
		@apply text-sm ml-auto dark:text-gray-300 text-gray-600;
	}

	@media print {
		time {
			@apply text-gray-900;
		}
	}
</style>
