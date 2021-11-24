<template>
	<div>
		<div class="priority-wrapper">
			<v-icon :color="status.color" class="circle-icon mdi-18px">
				mdi-circle
			</v-icon>
			<v-list-item-subtitle>
				{{ status.text }}
			</v-list-item-subtitle>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		priorityStatus: Number,
	},
	computed: {
		status() {
			return this.getPriorityStatus(this.priorityStatus);
		},
	},
	methods: {
		getPriorityStatus(statusNumber) {
			let text;
			let color;

			switch (statusNumber) {
				case 1:
					text = "Low";
					color = "#C0FFE0";
					break;
				case 2:
					text = "Medium";
					color = "#FF8400";
					break;
				case 3:
					text = "High";
					color = "#E00000";
					break;
				default:
					text = "";
					color = "";
			}
			return {
				text,
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
.circle-icon {
	margin-right: 5px;
}
</style>
