<template>
	<!-- ADD CUSTOM SEARCHBAR -->
	<div>
		<v-text-field
			append-icon="mdi-magnify"
			label="Search"
			single-line
			v-model="searchValue"
			@input="filterItems(searchValue)"
		></v-text-field>
	</div>
</template>

<script>
import todosEndpoint from '../endpoints/todosEndpoint';

export default {
	data: function () {
		return {
			listItemsAll: todosEndpoint.getTodos(),
			filteredTodos: [],
			searchValue: '',
		};
	},
	methods: {
		filterItems(value) {
			this.filteredTodos = this.listItemsAll.filter(item => {
				return item.title
					.toUpperCase()
					.includes(value.toUpperCase());
			});
			console.log(this.filteredTodos.length);
			todosEndpoint.setTodos(this.filteredTodos);
		},
	},
};
</script>
