<template>
	<div>
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					color="red lighten-2"
					dark
					v-bind="attrs"
					v-on="on"
					small
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</template>

			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					Add Todo
				</v-card-title>
				<v-text-field
					label="Title"
					hide-details="auto"
				></v-text-field>
				<v-textarea
					clearable
					label="Two rows"
					rows="5"
					row-height="20"
					no-resize
				></v-textarea>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false">
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
		};
	},
};
</script>

<style scoped></style>
