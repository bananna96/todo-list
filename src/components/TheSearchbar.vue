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
			>> ></v-text-field
		>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			listItemsAll: this.getTodos(),
			filteredTodos: [],
			searchValue: '',
		};
	},
	computed: {},
	methods: {
		getTodos() {
			return this.$store.state.todos;
		},
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

<style scoped></style>
