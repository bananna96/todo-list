<template>
	<v-sheet color="white" elevation="1" height="80px" width="500px">
		<div class="container">
			<TheSearchbar class="searchbar" />
			<TheAddItemDrawer class="drawer" />
		</div>
	</v-sheet>
</template>

<script>
import TheAddItemDrawer from '../components/TheAddItemDrawer.vue';
import TheSearchbar from '../components/TheSearchbar.vue';

export default {
	components: {
		TheAddItemDrawer,
		TheSearchbar,
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-between;
}
.searchbar {
	width: 80%;
}
</style>
