<template v-slot:label>
	<div>
		<v-list-item
			v-show="!this.editable"
			:key="listItem.id"
			class="item-container"
		>
			<v-col>
				<v-list-item-content @click="toggleEditable">
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
			<v-col class="third-col">
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
							<v-icon @click="toggleDone">
								mdi-check
							</v-icon>
						</v-btn>
					</div>
				</v-list-item-action>
			</v-col>
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
				<v-btn class="ma-1" color="green" plain @click="updateTodo">
					Update
				</v-btn>
			</v-list-item-action>
		</v-list-item>
		<v-divider></v-divider>
	</div>
</template>

<script>
import Priority from './Priority.vue';

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
				{ name: 'None', value: 0 },
				{ name: 'Low', value: 1 },
				{ name: 'Medium', value: 2 },
				{ name: 'High', value: 3 },
			],
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
				priority: this.priority,
				done: this.done,
			});
		},
		updateTodo() {
			this.$store.dispatch('updateTodo', {
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
.check-btn {
	margin-left: 16px;
}
.v-list-item__action {
	margin: 0 !important;
}

.actions-wrapper {
	display: flex;
}
.edit-warpper {
	padding: 0;
}

.circle-icon {
	margin: 10px;
}
.item-container {
	padding: 0;
}
.third-col {
	padding-right: 12px;
	display: flex;
	justify-content: flex-end;
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
