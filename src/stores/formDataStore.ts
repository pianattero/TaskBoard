import { defineStore } from "pinia";
import { iconsList } from "@/model/iconsList";
import { statusList } from "@/model/statusList";
import type { Task, Icon, Status } from "@/types/form-data.types";

export type RootState = {
  tasks: Task[];
  taskSelectedId: number | null;
  editMode: boolean;
  showModal: boolean;
  iconsList: Icon[];
  statusList: Status[];
};

export const useFormDataStore = defineStore({
  id: "formData",
  state: () =>
    ({
      tasks: [] as Task[],
      taskSelectedId: null,
      editMode: false,
      showModal: false,
      statusList: statusList,
      iconsList: iconsList,
    } as RootState),
  getters: {
    taskSelected(): Task | null {
      const task = this.tasks.find((task) => task.id === this.taskSelectedId);
      return task ? task : null;
    },
  },
  actions: {
    addTask(task: any) {
      this.tasks.push(task);
      this.closeModal();
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((item) => item.id !== id);
      this.closeModal();
    },
    editTask(task: Task) {
      const index = this.tasks.findIndex((item) => item.id === task.id);

      if (index !== -1) {
        this.tasks[index] = task;
        this.closeModal();
      } else {
        console.error("Tarea no encontrada para editar");
      }
    },
    closeModal() {
      this.editMode = false;
      this.showModal = false;
      this.taskSelectedId = null;
    },
  },
});
