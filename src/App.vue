<template>
	<v-app>
		<Home />
	</v-app>
</template>

<script>
import Home from './views/Home.vue';
export default {
	name: 'App',

	components: {
		Home,
	},

	data: () => ({
		//
	}),
};
</script>

<style scoped>
.v-application {
	background: rgb(28, 64, 68) !important;
	background: linear-gradient(
		0deg,
		rgba(28, 64, 68, 1) 0%,
		rgba(56, 128, 135, 1) 46%,
		rgba(96, 187, 196, 1) 100%
	) !important;
	font-family: 'Geneva', Geneva, sans-serif;
}
</style>
