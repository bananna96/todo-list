<template>
	<v-sheet rounded width="500px">
		<div class="listheader-wrapper">
			<TheSearchbar class="searchbar" />
			<TheAddItemDrawer />
		</div>
	</v-sheet>
</template>

<script>
import TheAddItemDrawer from "../components/TheAddItemDrawer.vue";
import TheSearchbar from "../components/TheSearchbar.vue";

export default {
	components: {
		TheAddItemDrawer,
		TheSearchbar,
	},
};
</script>

<style scoped>
.listheader-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 10px 0px;
}
.searchbar {
	width: 80%;
}
</style>
