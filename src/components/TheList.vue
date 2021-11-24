<template>
	<div class="list-wrapper">
		<span
			class="list-header"
			v-show="this.openItems.length > 0 && this.doneItems.length == 0"
		>
			Pending
		</span>
		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="this.openItems.length > 0"
		>
			<ListItem
				v-for="item in this.openItems"
				:key="item.id"
				:listItem="item"
			/>
		</v-sheet>
		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="this.openItems.length == 0 && this.doneItems.length > 0"
		>
			<v-subheader>No pending Todos</v-subheader>
		</v-sheet>
		<span
			class="list-header"
			v-show="this.openItems.length == 0 && this.doneItems.length > 0"
		>
			Done
		</span>

		<v-sheet
			width="500px"
			class="sheet"
			rounded
			v-show="this.doneItems.length > 0"
		>
			<ListItem
				v-for="item in this.doneItems"
				:key="item.id"
				:listItem="item"
			/>
		</v-sheet>
		<p class="no-items-text" v-show="this.todos.length == 0">
			Let's do something!
		</p>
	</div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
	components: {
		ListItem,
	},
	computed: {
		todos() {
			return this.$store.state.todos;
		},
		openItems() {
			return this.getOpenItems(this.$store.state.todos);
		},
		doneItems() {
			return this.getDoneItems(this.$store.state.todos);
		},
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
.no-items-text {
	font-size: 50px;
	font-family: "Bradley Hand", cursive;
	color: whitesmoke;
}
</style>
