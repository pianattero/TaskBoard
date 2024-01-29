<template>
	<div class="card-container">
		<div :class="icon?.bgColor" @click="openTask">
			<div class="task-description">
				<div>
					<IconBtn :icon-text="task?.icon" class="icon-bg-default" />
					<div class="task-info">
						<h3>{{ task?.name }}</h3>
						<p v-if="task?.description">{{ task?.description }}</p>
					</div>
				</div>
				<div>
					<IconBtn :icon-img="icon?.icon" :class="icon?.iconBgColor" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	// IMPORTS
	import { computed, type PropType } from "vue";
	import type { Task } from "@/types/form-data.types";
	import { useFormDataStore } from "@/stores/formDataStore";

	// STORES
	const formDataStore = useFormDataStore();

	// PROPS
	const props = defineProps({
		task: {
			type: Object as PropType<Task>,
		},
	});

	// COMPUTED
	const icon = computed(() => {
		switch (props.task?.status) {
			case "In Progress":
				return {
					icon: "src/assets/icons/Done_round_duotone.svg",
					iconBgColor: "in-progress-icon",
					bgColor: "card-info in-progress",
				};
			case "Completed":
				return {
					icon: "src/assets/icons/Time_atack_duotone.svg",
					iconBgColor: "completed-icon",
					bgColor: "card-info completed",
				};
			case "Do Later":
				return {
					icon: "src/assets/icons/close_ring_duotone.svg",
					iconBgColor: "later-icon",
					bgColor: "card-info later",
				};
			case "To do":
				return {
					icon: "src/assets/icons/to_do.svg",
					iconBgColor: "to-do-icon",
					bgColor: "card-info to-do",
				};
		}
	});

	// METHODS
	const openTask = () => {
		formDataStore.taskSelectedId = props.task!.id;
		formDataStore.editMode = true;
		formDataStore.showModal = true;
	};
</script>

<style scoped lang="scss">
	.card-container {
		width: 40rem;

		@include media() {
			width: 80vw;
		}

		.in-progress {
			background-color: $c-light-orange;
		}
		.completed {
			background-color: $c-light-green;
		}
		.later {
			background-color: $c-light-red;
		}
		.to-do {
			background-color: $c-light-grey;
		}
		.card-info {
			@include flex(row, nowrap, space-between, center);
			margin-bottom: 1rem;

			padding: 1rem;
			border-radius: $border-radius;

			div {
				@include flex(row, nowrap, center, center);
			}

			.task-description {
				@include flex(row, nowrap, space-between, center);
				width: 100%;

				.icon-bg-default {
					background-color: $c-bg-default;
				}

				.in-progress-icon {
					background-color: $c-orange;
				}
				.completed-icon {
					background-color: $c-green;
				}
				.later-icon {
					background-color: $c-red;
				}
				.to-do-icon {
					background-color: $c-grey;
				}

				.task-info {
					display: block;
					margin: 0 1rem;
				}
			}
		}
	}
</style>
