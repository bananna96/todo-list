<template>
	<div>
		<section id="home">
			<TheHeader />
		</section>

		<div class="sheet-wrapper">
			<TheListHeader class="list-header" />
			<TheList class="list" />
		</div>
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheListHeader from '../components/TheListHeader.vue';
import TheList from '../components/TheList.vue';
import todosEndpoint from '../endpoints/todosEndpoint';

export default {
	components: {
		TheHeader,
		TheListHeader,
		TheList,
	},
	data: function () {
		return {
			listItemsAll: todosEndpoint.getTodos(),
		};
	},
};
</script>

<style>
.sheet-wrapper {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
}

.list {
	margin-top: 5%;
}

.list-header {
	margin-top: 2%;
}
</style>
