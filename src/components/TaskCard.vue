<template>
  <div
    class="card-wrapper"
    :style="{ backgroundColor: icon?.bgColor }"
    @click="openTask"
  >
    <div class="left">
      <p class="task-icon" :style="{ backgroundColor: '#F8FAFC' }">
        {{ task.icon }}
      </p>
      <div class="task-info">
        <h3>{{ task.name }}</h3>
        <p v-if="task.description">{{ task.description }}</p>
      </div>
    </div>
    <div v-if="icon" class="right">
      <IconBtn :icon="icon.icon" :bg-color="icon.bgColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
// IMPORTS
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useFormDataStore } from "@/stores/formDataStore";
import type { Task } from "@/types/form-data.types";

// STORES
const formStore = useFormDataStore();

// PROPS
const props = defineProps<{
  task: Task;
}>();

// COMPUTED
const icon = computed(() => {
  switch (props.task.status) {
    case "In Progress":
      return {
        icon: "src/assets/icons/Time_atack_duotone.svg",
        bgColor: "#E9A23B",
      };
    case "Completed":
      return {
        icon: "src/assets/icons/Done_round_duotone.svg",
        bgColor: "#32D657",
      };
    case "Blocked":
      return {
        icon: "src/assets/icons/close_ring_duotone.svg",
        bgColor: "#DD524C",
      };
    case "To d0":
      return { icon: "src/assets/icons/circle.svg", bgColor: "#97A3B6" };
    default:
      break;
  }
});

// METHODS
const openTask = () => {
  formStore.taskSelectedId = props.task.id
  formStore.editMode = true
  formStore.showModal = true
};
</script>

<style scoped lang="scss">
.card-wrapper {
  @include flex(row, nowrap, space-between, center);
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: $border-radius;
  cursor: pointer;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;

    .task-icon {
      padding: 0.5rem;
      border-radius: $border-radius;
    }
    .task-info {
      margin-left: 1.5rem;
    }
  }
}
</style>
