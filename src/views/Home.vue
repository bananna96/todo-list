<template>
	<div>
		<section id="home">
			<TheHeader />
			<TheFooter />
		</section>

		<div class="sheet-wrapper">
			<v-sheet
				color="white"
				elevation="1"
				height="600px"
				width="500px"
			>
				<TheListHeader />
			</v-sheet>
		</div>
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheListHeader from '../components/TheListHeader.vue';
export default {
	components: {
		TheHeader,
		TheFooter,
		TheListHeader,
	},
};
</script>

<style>
.sheet-wrapper {
	display: flex;
	justify-content: center;
}
</style>
