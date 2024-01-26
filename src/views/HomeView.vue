<template>
  <Modal v-if="formStore.showModal" @emit-close="showModal = false">
    <Form />
  </Modal>
  <div :style="{ filter: showModal ? 'brightness(70%)' : 'brightness(1)' }">
    <div class="home-title">
      <h1>
        <img src="@/assets/icons/Logo.svg" /> My Task Board
        <img src="@/assets/icons/Edit_duotone.svg" />
      </h1>
      <p>Tasks to keep organised</p>
    </div>
    <div class="card-container">
      <TaskCard v-if="tasks.length" v-for="task in tasks" :task="task" />
      <div class="add-card" @click="addCard">
        <IconBtn
          :icon="'src/assets/icons/Add_round_duotone.svg'"
          :bg-color="'#E9A23B'"
        />
        <h3>Add new task</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// IMPORTS
import { ref } from "vue";
import { useFormDataStore } from "@/stores/formDataStore";
import { storeToRefs } from "pinia";

// STORES
const formStore = useFormDataStore();
// - Form data
const { tasks, showModal, editMode } = storeToRefs(formStore);

// METHODS
const addCard = () => {
  showModal.value = true;
  editMode.value = false;
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
.card-container {
  width: 40rem;

  @include media() {
    width: 80vw;
  }

  .add-card {
    @include flex(row, nowrap, flex-start, center);
    font-size: 1rem;
    background-color: #f5e8d5;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: $border-radius;
    cursor: pointer;
    h3 {
      margin-left: 1rem;
    }
  }
}
</style>
