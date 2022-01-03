<script context="module">
	export const prerender = true;
	export const router = false;
</script>

<script lang="ts">
	import '../app.css';

	import Sprite from '$lib/components/Sprite.svelte';
	import Header from '$lib/ui/Header.svelte';
	import QuickNav from '$lib/components/QuickNav.svelte';
</script>

<Sprite />
<div class="content">
	<QuickNav id="page-top-nav">
		<nav class="nav">
			<h1>Navigation rapide</h1>
			<div class="flex flex-col text-2xl mt-8">
				<ol class="list-disc pl-8 space-y-4">
					<li><a href="#about">A propos</a></li>
					<li><a href="#competences">Competences</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#etudes">Etudes</a></li>
				</ol>
			</div>
		</nav>
	</QuickNav>
	<Header />
	<slot />
	<QuickNav id="page-bottom-nav">
		<nav class="nav">
			<h1>Navigation rapide</h1>
			<div class="flex flex-col text-2xl mt-8">
				<ol class="list-disc pl-8 space-y-4">
					<li><a href="#page-top-nav">Revenir en haut de la page</a></li>
				</ol>
			</div>
		</nav>
	</QuickNav>
</div>

<style type="postcss">
	.content {
		@apply relative text-gray-800 w-full container mx-auto rounded bg-gray-50 dark:bg-indigo-800 dark:text-gray-300;
	}

	.nav {
		@apply fixed p-4 top-96 left-1/2 transform -translate-x-1/2 z-50 w-96 text-4xl dark:bg-indigo-800 bg-gray-50 rounded;
	}

	@page {
		margin: 0;
	}

	@media print {
		.content {
			@apply bg-white text-black;
		}
	}
</style>
