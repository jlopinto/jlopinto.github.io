<script context="module">
	export const router = false;
	export const hydrate = false;
</script>

<script lang="ts">
	import Experiences from '$lib/ui/Experiences.svelte';
	import Skills from '$lib/ui/Skills.svelte';
	import Studies from '$lib/ui/Studies.svelte';
</script>

<svelte:head>
	<title>Curriculum vitæ – Intégrateur / développeur front-end</title>
	<meta name="description" content="Curriculum vitæ de Julien Lopinto – Intégrateur / développeur front-end">
</svelte:head>

<main class="space-y-6">
	<Skills />
	<Experiences />
	<Studies />
</main>
