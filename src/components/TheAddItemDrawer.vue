<template>
	<div>
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					color="#6fb3b8"
					dark
					v-bind="attrs"
					v-on="on"
					small
					depressed
					fab
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="text-h5 drawer-header">
					Add Todo
				</v-card-title>
				<div>
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
				</div>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="addItem()">
						Add
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import todosEndpoint from '../endpoints/todosEndpoint';
export default {
	data() {
		return {
			dialog: false,
			title: '',
			description: '',
		};
	},
	methods: {
		addItem() {
			this.dialog = false;
			todosEndpoint.addTodo({
				title: this.title,
				description: this.description,
			});
		},
	},
};
</script>

<style scoped>
.drawer-header {
	background-color: #388087;
	color: white;
}

.text-input {
	margin: 10px 20px 0px 20px !important;
}
</style>
