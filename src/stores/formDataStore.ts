import { defineStore } from "pinia";
import type { Task, Status } from "@/types/form-data.types";
import { iconsList } from "@/model/iconsList";
import { statusList } from "@/model/statusList";

export type RootState = {
    tasks: Task[];
    taskSelectedId: string | null;
    editMode: boolean;
    showModal: boolean;
    iconsList: string[];
    statusList: Status[];
}

export const useFormDataStore = defineStore({
    id: 'formData',
    state: () => ({
        tasks: [] as Task[],
        taskSelectedId: null,
        editMode: false,
        showModal: false,
        iconsList: iconsList,
        statusList: statusList,
    } as RootState),
    getters: {
        taskSelected(): Task | null {
            const task = this.tasks.find((item) => item.id === this.taskSelectedId);
            return task ? task : null;
        },
    },
    actions: {
        closeModal() {
            this.editMode = false;
            this.showModal = false;
            this.taskSelectedId = null;
        },
        addTask(task: Task) {
            this.tasks.push(task);
            this.closeModal();
        },
        deleteTask(id: string) {
            this.tasks = this.tasks.filter((item) => item.id !== id);
            this.closeModal()
        },
        editTask(task: Task) {
            let taskToEdit = this.tasks.find((item) => item.id === task.id);

            if (taskToEdit) {
                taskToEdit.name = task.name;
                taskToEdit.description = task.description;
                taskToEdit.icon = task.icon;
                taskToEdit.status = task.status;
            } else {
                console.error("Task not found");
            }

            this.closeModal();
        }
    }
})