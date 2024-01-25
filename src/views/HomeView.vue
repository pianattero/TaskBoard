<template>
	<Modal :modal-active="modalActive" @emit-close="toggleModal">
		<Form @emit-reset="resetForm" />
	</Modal>
	<div :style="{ filter: modalActive ? 'brightness(70%)' : 'brightness(1)' }">
		<div class="home-title">
			<h1>
				<img src="@/assets/icons/Logo.svg" /> My Task Board
				<img src="@/assets/icons/Edit_duotone.svg" />
			</h1>
			<p>Tasks to keep organised</p>
		</div>
		<div>
			<TaskCard @create-task="toggleModal" @edit-task="editForm" />
		</div>
	</div>
</template>

<script setup lang="ts">
	// IMPORTS
	import { ref, toRaw } from "vue";
	import TaskCard from "@/components/TaskCard.vue";
	import Form from "@/components/Form.vue";
	import Modal from "@/components/Modal.vue";
	import { useFormDataStore } from "@/stores/formDataStore";
	import { storeToRefs } from "pinia";

	// STORES
	const formDataStore = useFormDataStore();
	// - Form data
	const { data } = storeToRefs(formDataStore);

	// DATA
	const modalActive = ref(false);

	// METHODS
	const toggleModal = () => (modalActive.value = !modalActive.value);
	const resetForm = () => {
		modalActive.value = false;
	};
	const editForm = (task: any) => {
		modalActive.value = true;
		// const dataToEdit = structuredClone(toRaw(task));
    const dataToEdit = task;
		data.value = dataToEdit;
		console.log(data.value);
	};
</script>

<style scoped lang="scss">
	.home-title {
		margin: 2rem 0;

		h1 {
			font-weight: 400;
			font-size: 2.5rem;
		}
	}
</style>
