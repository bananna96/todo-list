<template>
	<div class="list-wrapper">
		<span class="list-header">Pending</span>
		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="getOpenItems(this.todos).length > 0"
		>
			<ListItem
				v-for="item in getOpenItems(this.todos)"
				:key="item.id"
				:listItem="item"
			/>
		</v-sheet>
		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="
				this.todos.length == 0 ||
				getOpenItems(this.todos).length == 0
			"
		>
			<v-subheader>No pending todos</v-subheader>
		</v-sheet>
		<span class="list-header">Done</span>

		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="getDoneItems(this.todos).length > 0"
		>
			<ListItem
				v-for="item in getDoneItems(this.todos)"
				:key="item.id"
				:listItem="item"
			/>
		</v-sheet>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
	components: {
		ListItem,
	},
	data: function () {
		return {
			todos: this.$store.state.todos,
		};
	},
	methods: {
		getDoneItems(items) {
			return items.filter(item => item.done);
		},
		getOpenItems(items) {
			return items.filter(item => !item.done);
		},
	},
};
</script>

<style scoped>
.list-wrapper {
	display: flex;
	flex-direction: column;
	justify-items: space-between;
	margin-top: 20px;
}

.sheet {
	margin-bottom: 20px;
}

.list-header {
	color: whitesmoke;
	font-weight: bold;
	margin: 5px 0px;
}
</style>
