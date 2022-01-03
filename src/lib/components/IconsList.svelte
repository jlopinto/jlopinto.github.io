<script>
	import SpriteIcon from '$lib/components/SpriteIcon.svelte';
	export let icons = [];
</script>

<ul class="inline-flex gap-2 flex-wrap border-t border-indigo-600 mt-3 pt-3">
	{#each icons as icon}
		<li>
			<SpriteIcon id={icon.id} title={icon.title} />
		</li>
	{/each}
</ul>
