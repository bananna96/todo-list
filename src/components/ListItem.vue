<template>
	<div>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title>{{ listItem.title }}</v-list-item-title>
			</v-list-item-content>
			<v-list-item-action>
				<div>
					<v-icon @click="deleteItem()" color="red">
						mdi-delete
					</v-icon>

					<v-icon @click="console.log('done')" color="green">
						mdi-check
					</v-icon>
				</div>
			</v-list-item-action>
		</v-list-item>
	</div>
</template>

<script>
import todosEndpoint from '../endpoints/todosEndpoint';

export default {
	props: {
		listItem: {},
	},
	methods: {
		deleteItem() {
			todosEndpoint.deleteTodo(this.listItem.id);
		},
	},
};
</script>

<style scoped></style>
