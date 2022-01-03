<script type="ts">
	import Section from '$lib/components/Section.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import SectionItem from '$lib/components/SectionItem.svelte';
	import Time from '$lib/components/Time.svelte';
</script>

<Section id="etudes" class="space-y-8">
	<div class="space-y-4">
		<SectionTitle title="Etudes" />
		<div class="space-y-6">
			<SectionItem>
				DUT Informatique <br />
				Paul Sabatier - Toulouse - France
				<div class="ml-auto" slot="media">
					<Time datetime="2005">2005</Time>
				</div>
			</SectionItem>
			<SectionItem>
				BTS Informatique de gestion <br />
				ESICAD - Labege - France
				<div class="ml-auto" slot="media">
					<Time datetime="2003">2003</Time>
				</div>
			</SectionItem>
			<SectionItem>
				BAC STI génie mécanique <br />
				Lycée Jean Mermoz - Montpelier - France
				<div class="ml-auto" slot="media">
					<Time datetime="2001">2001</Time>
				</div>
			</SectionItem>
		</div>
	</div>
</Section>
