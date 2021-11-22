<template>
	<!-- ADD CUSTOM SEARCHBAR -->
	<div>
		<v-text-field
			append-icon="mdi-magnify"
			label="Search"
			single-line
			v-model="searchValue"
			@input="filterItems(searchValue)"
			clearable
			outlined
			hide-details
		></v-text-field>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			listItemsAll: this.$store.state.todos,
			filteredTodos: [],
			searchValue: '',
		};
	},
	computed: {},
	methods: {
		setTodos() {
			this.$store.dispatch('setTodos', this.filteredTodos);
		},
		filterItems(value) {
			if (value) {
				this.filteredTodos = this.listItemsAll.filter(item => {
					return item.title
						.toUpperCase()
						.includes(value.toUpperCase());
				});
				this.setTodos();
			} else {
				this.filteredTodos = this.listItemsAll;
				this.setTodos();
			}
		},
	},
};
</script>

<style scoped>
/* .v-text-field--outlined >>> fieldset {
	border-color: rgba(111, 179, 184, 1);
}
.v-text-field--outlined >>> i,
.v-text-field--outlined >>> label {
	color: rgba(111, 179, 184, 1);
} */
</style>
