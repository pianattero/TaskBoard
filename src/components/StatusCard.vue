<template>
	<button type="button" class="status-container">
		<IconBtn :icon-img="props.icon" :class="bgColor" />
		<h4>{{ props.name }}</h4>
	</button>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	// PROPS
	const props = defineProps({
		name: String,
		icon: String,
	});

	// COMPUTED
	const bgColor = computed(() => {
		switch (props.icon) {
			case "src/assets/icons/Time_atack_duotone.svg":
				return "in-progress-bg";
			case "src/assets/icons/Done_round_duotone.svg":
				return "completed-bg";
			case "src/assets/icons/close_ring_duotone.svg":
				return "later-bg";
			case "src/assets/icons/to_do.svg":
				return "to-do-bg";
		}
	});
</script>

<style scoped lang="scss">
	.status-container {
		@include flex(row, nowrap, flex-start, center);
		border-radius: $border-radius;
		padding: 0.2rem;
		margin: 0.2rem;
		min-width: 17rem;

		h4 {
			margin-left: 0.6rem;
			font-weight: 400;
		}
	}
	.in-progress-bg {
		background-color: $c-orange;
	}
	.completed-bg {
		background-color: $c-green;
	}
	.later-bg {
		background-color: $c-red;
	}
	.to-do-bg {
		background-color: $c-grey;
	}
</style>
