<template v-slot:label>
	<div>
		<v-list-item
			v-show="!this.editable"
			:key="listItem.id"
			class="item-container"
		>
			<v-col
				:cols="listItem.priority > 0 ? 6 : 8"
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
			</v-col>
			<v-col @click="toggleEditable">
				<Priority
					v-show="listItem.priority > 0"
					:priorityStatus="listItem.priority"
				/>
			</v-col>
			<v-col class="col-3">
				<v-list-item-action>
					<div class="actions-wrapper">
						<v-btn
							color="#FFFFFF"
							v-show="done"
							small
							depressed
							fab
							class="arrow-btn"
						>
							<v-icon @click="toggleDone" color="#6fb3b8">
								mdi-arrow-up
							</v-icon>
						</v-btn>
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
							<v-icon @click="toggleDone">
								mdi-check
							</v-icon>
						</v-btn>
					</div>
				</v-list-item-action>
			</v-col>
		</v-list-item>
		<v-list-item v-show="this.editable">
			<v-list-item-content class="edit-wrapper">
				<v-text-field
					label="Title"
					hide-details
					v-model="title"
					outlined
				></v-text-field>

				<v-textarea
					label="Description"
					rows="3"
					row-height="20"
					no-resize
					v-model="description"
					hide-details
					outlined
				></v-textarea>
				<v-select
					:items="prioritySelection"
					v-model="priority"
					item-text="name"
					label="Priority"
					outlined
					hide-details
				></v-select>
			</v-list-item-content>
			<v-list-item-action>
				<div class="btn-container">
					<v-btn color="green" plain @click="updateTodo">
						Update
					</v-btn>
					<v-btn color="red" plain @click="close"> Close </v-btn>
				</div>
			</v-list-item-action>
		</v-list-item>
		<v-divider></v-divider>
	</div>
</template>

<script>
import Priority from "./Priority.vue";

export default {
	components: {
		Priority,
	},
	props: {
		listItem: {},
	},
	data: function () {
		return {
			editable: false,
			title: this.listItem.title,
			description: this.listItem.description,
			done: this.listItem.done,
			priority: this.listItem.priority,
			prioritySelection: [
				{ name: "None", value: 0 },
				{ name: "Low", value: 1 },
				{ name: "Medium", value: 2 },
				{ name: "High", value: 3 },
			],
		};
	},
	methods: {
		close() {
			this.title = this.listItem.title;
			this.description = this.listItem.description;
			this.priority = this.listItem.priority;
			this.toggleEditable();
		},
		deleteItem() {
			this.$store.dispatch("deleteTodo", this.listItem.id);
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
			this.$store.dispatch("updateTodo", {
				id: this.listItem.id,
				title: this.title,
				description: this.description,
				priority: this.priority,
				done: this.done,
			});
		},
		updateTodo() {
			this.$store.dispatch("updateTodo", {
				id: this.listItem.id,
				title: this.title,
				description: this.description,
				priority: this.priority,
				done: this.done,
			});
			this.toggleEditable();
		},
	},
};
</script>

<style scoped>
.btn-container {
	display: flex;
	flex-direction: column;
}

.btn-container > button {
	margin: 5px 0px;
}
.arrow-btn {
	margin-right: 16px;
}
.check-btn {
	margin-left: 16px;
}
.v-list-item__action {
	margin: 0 !important;
}
.actions-wrapper {
	display: flex;
}
.edit-wrapper {
	padding: 0;
}
.edit-wrapper > div {
	margin: 10px 0px;
}
.item-container {
	padding: 0;
}
.col-3 {
	padding-right: 12px;
	display: flex;
	justify-content: flex-end;
}
.v-text-field--outlined >>> fieldset {
	border-color: rgba(111, 179, 184, 1);
}
</style>
