<script>
	import SpriteIcon from '$lib/components/SpriteIcon.svelte';
</script>

<header id="about">
	<div class="col-span-8 lg:col-span-9 order-last">
		<div class="flex">
			<div class="flex-grow">
				<div class="flex items-center">
					<img
						src="me.jpg"
						class="img-fluid mr-3 rounded-md w-16 h-16 md:w-24 md:h-24"
						alt="Portrait de Julien Lopinto"
						width="94"
						height="94"
					/>
					<div class="flex-grow">
						<h1 class="text-3xl uppercase">
							<span class="text-xs block tracking-widest">Curriculum vitæ</span>
							Julien <span class="font-bold">Lopinto</span>
						</h1>
						<p class="text-base">Intégrateur / développeur frontend</p>
					</div>
				</div>
				<div class="print:grid print:grid-cols-2 print:mt-6">
					<p class="screen:mt-8">
						Développeur web depuis 2005, mes expériences et ma veille constante, me permettent de proposer mon
						expertise sur le développement d'interface web, au sein de la plupart des frameworks et
						librairies modernes.
					</p>
					<p class="screen:mt-2">
						J'aide à la conception, production, maintenance et optimisation de sites internet, web-apps,
						newsletters et design systems. Passionné, ma motivation première est la production d'interfaces
						web accessibles, performantes et maintenables.
					</p>
				</div>
			</div>
		</div>
	</div>
	<nav class="col-span-4 lg:col-span-3 md:flex md:flex-col md:items-end relative">
		<ul class="contact-list">
			<li class="contact-list__item">
				<div class="contact-list__label">Cugnaux, FRANCE</div>
				<div class="contact-list__icon">
					<SpriteIcon id="location" title="Location" printable={false} />
				</div>
			</li>
			<li class="contact-list__item">
				<div class="contact-list__label">jlopinto</div>
				<div class="contact-list__icon">
					<SpriteIcon id="github" title="github" printable={false} />
				</div>
			</li>
			<li class="contact-list__item">
				<div class="contact-list__label">julienlopinto</div>
				<div class="contact-list__icon">
					<SpriteIcon id="linkedin" title="Linkedin" printable={false} />
				</div>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		@apply md:grid md:grid-cols-12 md:gap-10 p-8;
		@apply print:flex print:flex-col print:gap-10 print:px-0;
	}

	.contact-list {
		@apply text-right md:mt-auto mt-8 pb-2 screen:space-y-2 md:space-y-4;
		@apply print:text-sm print:space-y-0 print:grid print:grid-cols-4 print:gap-x-8 print:gap-y-4 print:items-center print:mt-0 print:text-left;
	}

	.contact-list__item {
		@apply relative z-10 flex md:justify-end print:justify-start items-center;
	}

	.contact-list__icon {
		@apply bg-gray-50 w-8 h-8 dark:bg-indigo-700 rounded-full dark:text-gray-100 order-first md:order-last flex-shrink-0;
		@apply print:order-first;
	}

	.contact-list__label {
		@apply print:ml-2 screen:ml-2 md:mr-2;
	}

	@media theme('screens.screen.raw') and (min-width: theme('screens.md')) {
		.contact-list::after {
			content: '';
			position: absolute;
			display: block;
			width: 4px;
			top: 0;
			bottom: 0;
			right: 0.85rem;

			@apply bg-gradient-to-t from-indigo-700 to-indigo-400 rounded-full;
		}
	}
</style>
