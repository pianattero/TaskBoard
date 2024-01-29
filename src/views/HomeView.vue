<template>
	<Modal v-if="showModal" @emit-close="showModal = false">
		<Form />
	</Modal>
	<div :class="showModal ? 'dark-bg' : 'light-bg'">
		<div class="home-title">
			<h1>
				<img src="@/assets/icons/Logo.svg" /> My Task Board
				<img src="@/assets/icons/Edit_duotone.svg" />
			</h1>
			<p>Tasks to keep organised</p>
		</div>
		<div class="add-new" @click="addCard">
			<IconBtn
				:icon-img="'src/assets/icons/Add_round_duotone.svg'"
				class="icon-bg"
			/>
			<h3>Add new task</h3>
		</div>
		<div>
			<TaskCard v-for="task in tasks" :key="task.id" :task="task" />
		</div>
	</div>
</template>

<script setup lang="ts">
	// IMPORTS
	import { useFormDataStore } from "@/stores/formDataStore";
	import { storeToRefs } from "pinia";

	// STORES
	const formDataStore = useFormDataStore();
	// - Form Data
	const { tasks, showModal, editMode } = storeToRefs(formDataStore);

	// METHODS
	const addCard = () => {
		showModal.value = true;
		editMode.value = false;
	};
</script>

<style scoped lang="scss">
	.dark-bg {
		filter: brightness(70%);
	}

	light-bg {
		filter: brightness(1);
	}
	.home-title {
		margin: 2rem 0;

		h1 {
			font-weight: 400;
			font-size: 2.5rem;
		}
	}

	.add-new {
		@include flex(row, nowrap, flex-start, center);
		margin-bottom: 1rem;
		padding: 1rem;
		border-radius: $border-radius;
		font-size: 0.75rem;
		width: 40rem;
		background-color: $c-lighter-orange;

		.icon-bg {
			background-color: $c-orange;
		}

		@include media() {
			width: 80vw;
		}

		h3 {
			margin-left: 1rem;
		}
	}
</style>
