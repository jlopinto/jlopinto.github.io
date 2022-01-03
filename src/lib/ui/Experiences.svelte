<script type="ts">
	import Section from '$lib/components/Section.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import SectionItem from '$lib/components/SectionItem.svelte';
	import Time from '$lib/components/Time.svelte';
	import IconsList from '$lib/components/IconsList.svelte';

	const now = `${new Date().getMonth() + 1} / ${new Date().getFullYear()}`;
</script>

<Section id="experience" class="space-y-4">
	<SectionTitle title="Experience" />
	<div class="space-y-8">
		<SectionItem>
			<h3 slot="body">Développeur frontend</h3>

			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="05/2013">05/2013</Time> → <Time datetime={now}>{now}</Time>
			</div>
			<div class="font-bold uppercase">Freelancing</div>
			<div class="mt-2 space-y-2">
				<div class="text-xs font-bold">Clients</div>
				<p>Fabernovel, Sopra Steria, Mirum, Sigfox, Wamiz.</p>

				<div class="text-xs font-bold mt-2">Clients finaux</div>
				<p>
					Airbus, BMW, MGEN, HSBC, Syndex, Sigfox, Fleurus presse, Wamiz, KRUG, Mövenpick, Nespresso, DeBoeck.
				</p>
				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'css3-plain', title: 'CSS' },
						{ id: 'sass-original', title: 'SASS' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'react-original', title: 'React' },
						{ id: 'vuejs-original', title: 'VueJS' },
						{ id: 'angularjs-plain', title: 'Angular' },
						{ id: 'php-plain', title: 'PHP' },
						{ id: 'symfony-plain', title: 'Symfony' },
						{ id: 'gulp-plain', title: 'Gulp' },
						{ id: 'webpack-plain', title: 'Webpack' },
						{ id: 'git-plain', title: 'Git' },
						{ id: 'jest-plain', title: 'Jest' },
						{ id: 'svelte-plain', title: 'Svelte' }
					]}
				/>
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body">Développeur frontend</h3>
			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="01/2013">01/2013</Time> → <Time datetime="05/2013">05/2013</Time>
			</div>
			<div class="font-bold uppercase">Inconito</div>
			<div class="mt-2 space-y-2">
				<p>intégration et theming Drupal/Wordpress.</p>
				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'css3-plain', title: 'CSS' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'sass-original', title: 'Sass' },
						{ id: 'grunt-plain', title: 'Grunt' },
						{ id: 'drupal-plain', title: 'Drupal' },
						{ id: 'wordpress-plain', title: 'Wordpress' },
						{ id: 'git-plain', title: 'Git' }
					]}
				/>
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body">Développeur web</h3>
			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="11/2009">11/2009</Time> → <Time datetime="11/2011">11/2011</Time>
			</div>
			<div class="font-bold uppercase">Acid network</div>

			<div class="mt-2 space-y-2">
				<p>Intégration, développement et maintenance des applicatifs B2C/B2B.</p>
				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'css3-plain', title: 'CSS' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'less-plain-wordmark', title: 'Less' },
						{ id: 'svn-plain', title: 'SVN' }
					]}
				/>
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body">Développeur web</h3>
			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="11/2009">11/2009</Time> → <Time datetime="06/2009">06/2009</Time>
			</div>
			<div class="font-bold uppercase">JNC Diffusion</div>
			<div class="mt-2 space-y-2">
				<p>intégration et développement PHP/SQL de sites vitrines.</p>

				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'css3-plain', title: 'CSS' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'less-plain-wordmark', title: 'Less' },
						{ id: 'mysql-plain', title: 'MySql' }
					]}
				/>
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body">Développeur web</h3>
			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="01/2008">01/2008</Time> → <Time datetime="04/2008">04/2008</Time>
			</div>
			<div class="font-bold uppercase">Oréalys</div>

			<div class="mt-2 space-y-2">
				<p>Développement PHP/Mysql, support client.</p>

				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'php-plain', title: 'PHP' },
						{ id: 'mysql-plain', title: 'MySql' }
					]}
				/>
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body">Développeur web</h3>
			<div slot="media" class="ml-auto md:ml-0 text-sm">
				<Time datetime="01/2008">01/2008</Time> → <Time datetime="04/2008">04/2008</Time>
			</div>
			<div class="font-bold uppercase">FRAM</div>
			<div class="mt-2 space-y-2">
				<p>Développement et maintenance des applicatifs B2C/B2B</p>
				<IconsList
					icons={[
						{ id: 'html5-plain', title: 'HTML' },
						{ id: 'javascript-plain', title: 'Javascript' },
						{ id: 'php-plain', title: 'PHP' },
						{ id: 'mysql-plain', title: 'MySql' },
						{ id: 'postgresql-plain', title: 'Postgre SQL' }
					]}
				/>
			</div>
		</SectionItem>
	</div>
</Section>
