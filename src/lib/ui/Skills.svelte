<script type="ts">
	import Section from '$lib/components/Section.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import SectionItem from '$lib/components/SectionItem.svelte';
	import SkillBar from '$lib/components/SkillBar.svelte';
</script>

<Section id="competences">
	<SectionTitle title="Compétences" id="Competences" />

	<SectionItem class="mt-4">
		<div class="grid grid-cols-4 gap-6 font-semibold text-xs uppercase">
			<div class="col-start-2">Projets</div>
			<div>Séniorité</div>
			<div>Affinité</div>
		</div>
	</SectionItem>
	<div class="space-y-8">
		<SectionItem class="mt-2">
			<h3 slot="body" class="leading-5 py-1 border-b border-transparent">Langages</h3>
			<div class="mt-2 md:mt-0">
				<SkillBar skill="HTML" nbProjets="30+" affinity={5} />
				<SkillBar skill="Javascript" nbProjets="30+" affinity={5} />
				<SkillBar skill="CSS" nbProjets="30+" monthLength={12 * 12} affinity={5} affinityLabel="" />
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body" class="leading-5 py-1 border-b border-transparent">frameworks</h3>
			<div class="mt-2 md:mt-0">
				<SkillBar skill="Angular" nbProjets="3" monthLength={8} affinity={4} />
				<SkillBar skill="Vue" nbProjets="2" monthLength={3} affinity={3} />
				<SkillBar skill="React" nbProjets="1" monthLength={4} affinity={2} />
				<SkillBar skill="Svelte" nbProjets="1" monthLength={2} affinity={5} />
				<SkillBar skill="Twig" nbProjets="10" monthLength={32} affinity={3} />
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body" class="leading-5 py-1 border-b border-transparent">Qualité</h3>
			<div class="mt-2 md:mt-0">
				<SkillBar skill="TypeScript" nbProjets="8" monthLength={36} affinity={4} />
				<SkillBar skill="Jest" nbProjets="3" monthLength={8} affinity={4} />
				<SkillBar skill="Cypress" nbProjets="3" monthLength={22} affinity={4} />
			</div>
		</SectionItem>
		<SectionItem>
			<h3 slot="body" class="leading-5 py-1 border-b border-transparent">Travail en équipe</h3>
			<div class="mt-2 md:mt-0">
				<SkillBar skill="Git" nbProjets="10" monthLength={6 * 12} />
				<SkillBar skill="Agilité" nbProjets="8+" monthLength={30} />
			</div>
		</SectionItem>
	</div>
</Section>
