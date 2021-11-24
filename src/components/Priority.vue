<template>
	<div>
		<div class="priority-wrapper">
			<v-icon
				:color="getPriorityStatus(priorityStatus).color"
				class="circle-icon mdi-18px"
			>
				mdi-circle
			</v-icon>
			<v-list-item-subtitle>
				{{ getPriorityStatus(priorityStatus).status }}
			</v-list-item-subtitle>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		priorityStatus: Number,
	},
	methods: {
		getPriorityStatus(statusNumber) {
			let status;
			let color;

			switch (statusNumber) {
				case 1:
					status = 'Low';
					color = '#C0FFE0';
					break;
				case 2:
					status = 'Medium';
					color = '#FF8400';
					break;
				case 3:
					status = 'High';
					color = '#E00000';
					break;
				default:
					status = '';
					color = '';
			}
			return {
				status,
				color,
			};
		},
	},
};
</script>

<style scoped>
.priority-wrapper {
	display: flex;
	align-items: center;
}
</style>
