<template>
	<div class="container">
		<v-sheet color="white" elevation="1" width="500px">
			<v-list>
				<v-list-item-group>
					<ListItem
						v-for="item in getOpenItems(listItemsAll)"
						:key="item.id"
						:listItem="item"
					/>
				</v-list-item-group>
			</v-list>
		</v-sheet>
		<v-sheet color="white" elevation="1" width="500px">
			<v-list>
				<v-list-item-group>
					<ListItem
						v-for="item in getDoneItems(listItemsAll)"
						:key="item.id"
						:listItem="item"
					/>
				</v-list-item-group>
			</v-list>
		</v-sheet>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import todosEndpoint from '../endpoints/todosEndpoint';

export default {
	components: {
		ListItem,
	},
	data: function () {
		return {
			listItemsAll: todosEndpoint.getTodos(),
		};
	},
	methods: {
		getDoneItems(items) {
			return items.filter(item => item.done);
		},
		getOpenItems(items) {
			return items.filter(item => !item.done);
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
