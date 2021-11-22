<template v-slot:activator>
	<div>
		<v-list-item
			v-show="!this.editable"
			:key="listItem.id"
			@click="toggleEditable"
		>
			<v-list-item-content>
				<v-list-item-title>
					{{ listItem.title }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ listItem.description }}
				</v-list-item-subtitle>
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
		<v-list-item v-show="this.editable">
			<v-list-item-content>
				<v-text-field
					class="text-input"
					label="Title"
					hide-details
					v-model="title"
					outlined
				></v-text-field>
				<v-textarea
					class="text-input"
					clearable
					label="Two rows"
					rows="3"
					row-height="20"
					no-resize
					v-model="description"
					hide-details
					outlined
				></v-textarea>
			</v-list-item-content>
			<v-list-item-action>
				<div>
					<v-icon @click="updateTodo" color="green">
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
	data: function () {
		return {
			editable: false,
			title: this.listItem.title,
			description: this.listItem.description,
		};
	},
	methods: {
		deleteItem() {
			todosEndpoint.deleteTodo(this.listItem.id);
		},
		toggleEditable() {
			this.editable = !this.editable;
		},
		updateTodo() {
			this.$store.dispatch('updateTodo', {
				id: this.listItem.id,
				title: this.title,
				description: this.description,
			});
			this.toggleEditable();
		},
	},
};
</script>

<style scoped></style>
