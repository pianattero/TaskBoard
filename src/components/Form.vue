<template>
  <form>
    <div>
      <div>
        <label>Task Name</label>
        <input
          type="text"
          maxlength="50"
          placeholder="Task name"
          required
          v-model="name"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          maxlength="100"
          placeholder="Enter a short description"
          v-model="description"
        />
      </div>
      <div>
        <label>Icon</label>
        <div class="select">
          <p
            v-for="(icon, index) in iconsList"
            :key="index"
            class="icon-btn"
            :style="{ backgroundColor: iconColor(icon) }"
            @click="iconSelected = icon"
          >
            {{ icon }}
          </p>
        </div>
      </div>
      <div>
        <label>Status</label>
        <div class="select">
          <StatusCard
            v-for="status in statusList"
            :key="status.name"
            :name="status.name"
            :icon="status.icon"
            :bg-color="status.iconBgColor"
            :border-color="statusColor(status.name)"
            @click="statusSelected = status.name"
          />
        </div>
      </div>
    </div>
    <div class="form-btns">
      <FormBtn
        v-if="formStore.editMode"
        text="Delete"
        icon="src/assets/icons/Trash.svg"
        bg-color="#97A3B6"
        @click="formStore.deleteTask(formStore.taskSelectedId!)"
      />
      <FormBtn
        text="Save"
        icon="src/assets/icons/Done_round.svg"
        bg-color="#3662E3"
        @click="createTask"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
// IMPORTS
import { computed, onMounted, ref, type Ref } from "vue";
import { useFormDataStore } from "@/stores/formDataStore";
import { iconsList } from "@/model/iconsList";
import { statusList } from "@/model/statusList";

// STORES
const formStore = useFormDataStore();

// EMITS
const emit = defineEmits(["close-form"]);

// HOOKS
onMounted(() => {
  iconSelected.value = iconsList[0];
  statusSelected.value = statusList[0].name;
  if (formStore.editMode) {
    name.value = formStore.taskSelected!.name;
    description.value = formStore.taskSelected!.description;
    iconSelected.value = formStore.taskSelected!.icon;
    statusSelected.value = formStore.taskSelected!.status;
  }
});

// DATA
const name: Ref<string> = ref("");
const description: Ref<string> = ref("");
const iconSelected: Ref<string> = ref("");
const statusSelected: Ref<string> = ref("");

// COMPUTED
const statusColor = computed(() => {
  return (name: string) => {
    return statusSelected.value && statusSelected.value === name
      ? "0.15rem solid #3662E3"
      : "0.15rem solid #E3E8EF";
  };
});

const iconColor = computed(() => {
  return (icon: string) => {
    return iconSelected.value && iconSelected.value === icon
      ? "#F5D565"
      : "#E3E8EF";
  };
});

// METHODS
const createTask = () => {
  const task = {
    id: formStore.tasks.length + 1,
    name: name.value,
    description: description.value,
    icon: iconSelected.value,
    status: statusSelected.value,
  };
  if (formStore.editMode && formStore.taskSelectedId) {
    task.id = formStore.taskSelectedId;
  }
  formStore.editMode ? formStore.editTask(task) : formStore.addTask(task);
};
</script>

<style scoped lang="scss">
form {
  @include flex(column, nowrap, space-between, flex-start);
  height: 75vh;

  label {
    display: inline-block;
    font-size: 0.75rem;
    color: $c-grey;
  }

  input,
  textarea {
    display: block;
    background-color: $c-bg-default;
    color: $c-title-description;
    border: $border;
    border-radius: $border-radius;
    padding: 0.6rem;
    width: 100%;
    font-family: "Outfit", sans-serif;
  }

  .select {
    @include flex(row, wrap, flex-start, center);
    max-width: 100%;
    .icon-btn {
      padding: 0.5rem;
      border-radius: $border-radius;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  .form-btns {
    @include flex(row, nowrap, flex-end, center);
    width: 100%;
  }
}
</style>
