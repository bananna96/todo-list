<template>
	<div>
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, open }">
				<v-btn
					color="#6fb3b8"
					dark
					v-bind="open"
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
				<div class="content-wrapper">
					<v-alert
						:value="alert"
						color="pink"
						dense
						transition="scale-transition"
						outlined
						text
						width="50%"
					>
						Title is required!
					</v-alert>
					<v-text-field
						class="text-input"
						label="Title"
						hide-details
						v-model="title"
						outlined
						@input="toggleDisabled(title)"
					></v-text-field>
					<v-textarea
						class="text-input"
						clearable
						label="Description"
						rows="3"
						row-height="20"
						no-resize
						v-model="description"
						hide-details
						outlined
					></v-textarea>
					<v-select
						class="text-input"
						:items="prioritySelection"
						v-model="priority"
						item-text="name"
						label="Priority"
						outlined
						hide-details
					></v-select>
				</div>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="#ea7186" text @click="toggleDialog()">
						Close
					</v-btn>
					<v-btn
						color="primary"
						text
						@click="addItem()"
						:disabled="this.btnDisabled"
					>
						Add
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			title: "",
			description: "",
			priority: 0,
			prioritySelection: [
				{ name: "None", value: 0 },
				{ name: "Low", value: 1 },
				{ name: "Medium", value: 2 },
				{ name: "High", value: 3 },
			],
			alert: false,
			btnDisabled: true,
		};
	},
	methods: {
		addItem() {
			if (this.title.trim().length > 0) {
				this.$store.dispatch("addTodo", {
					title: this.title,
					description: this.description,
					priority: this.priority,
				});
				this.toggleDialog();
			} else {
				this.btnDisabled = true;
				this.title = "";
				this.alert = !this.alert;
			}
		},
		toggleDialog() {
			this.dialog = !this.dialog;
			this.title = "";
			this.description = "";
			this.priority = 0;
			this.alert = false;
		},
		toggleDisabled(text) {
			if (text.length == 0) {
				this.btnDisabled = true;
			} else {
				this.btnDisabled = false;
			}
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
	width: 95%;
}

.v-text-field--outlined >>> fieldset {
	border-color: rgba(111, 179, 184, 1);
}

.v-alert {
	margin: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.content-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
}
</style>
