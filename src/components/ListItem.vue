<template v-slot:label>
	<div>
		<v-list-item v-show="!this.editable" :key="listItem.id">
			<v-list-item-content @click="toggleEditable">
				<v-list-item-title>
					{{ listItem.title }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ listItem.description }}
				</v-list-item-subtitle>
			</v-list-item-content>
			<v-list-item-action>
				<div class="actions-wrapper">
					<v-icon @click="deleteItem()" color="#ea7186">
						mdi-delete
					</v-icon>
					<v-btn
						color="#88db9f"
						v-show="!done"
						dark
						small
						depressed
						fab
						class="check-btn"
					>
						<v-icon @click="toggleDone"> mdi-check </v-icon>
					</v-btn>
				</div>
			</v-list-item-action>
		</v-list-item>
		<v-list-item v-show="this.editable">
			<v-list-item-content class="edit-warpper">
				<v-text-field
					class="text-input"
					label="Title"
					hide-details
					v-model="title"
					outlined
				></v-text-field>
				<v-textarea
					class="text-input"
					label="Description"
					rows="3"
					row-height="20"
					no-resize
					v-model="description"
					hide-details
					outlined
				></v-textarea>
			</v-list-item-content>
			<v-list-item-action>
				<v-btn class="ma-1" color="green" plain @click="updateTodo">
					Update
				</v-btn>
			</v-list-item-action>
		</v-list-item>
		<v-divider></v-divider>
	</div>
</template>

<script>
export default {
	props: {
		listItem: {},
	},
	data: function () {
		return {
			editable: false,
			title: this.listItem.title,
			description: this.listItem.description,
			done: this.listItem.done,
		};
	},
	methods: {
		deleteItem() {
			this.$store.dispatch('deleteTodo', this.listItem.id);
		},
		toggleEditable() {
			if (this.done) {
				this.editable = false;
			} else {
				this.editable = !this.editable;
			}
		},
		toggleDone() {
			this.done = !this.done;
			this.$store.dispatch('updateTodo', {
				id: this.listItem.id,
				title: this.title,
				description: this.description,
				done: this.done,
			});
		},
		updateTodo() {
			this.$store.dispatch('updateTodo', {
				id: this.listItem.id,
				title: this.title,
				description: this.description,
				done: this.done,
			});
			this.toggleEditable();
		},
	},
};
</script>

<style scoped>
.check-btn {
	margin-left: 16px;
}
.v-list-item__action {
	margin: 0 !important;
}
.edit-warpper {
	padding: 0;
}

.edit-warpper > div {
	margin: 10px 0px;
}
.text-input {
	border-color: yellow !important;
}
.v-text-field--outlined >>> fieldset {
	border-color: rgba(111, 179, 184, 1);
}
</style>
