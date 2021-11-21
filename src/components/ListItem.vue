<template>
	<div>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title>{{ listItem.title }}</v-list-item-title>
			</v-list-item-content>
			<v-list-item-action>
				<v-icon @click="console.log('clicked')" color="green"
					>mdi-check</v-icon
				>
			</v-list-item-action>
		</v-list-item>
	</div>
</template>

<script>
export default {
	props: {
		listItem: {},
	},
};
</script>
