import { defineStore } from "pinia";
import { type FormData } from '@/types/form-data.types'

export const useFormDataStore = defineStore({
    id: 'formData',
    state: () => ({
        data: {} as FormData,
        tasks: [] as FormData[],
      }),
    actions: {
        setName(name: string) {
            this.data.name = name
            return true
        },
        setDescription(description: string) {
            this.data.description = description
            return true
        },
        setIcon(icon: string) {
            this.data.icon = icon
            return this.data.icon
        },
        setStatus(status: string) {
            this.data.status = status
            return this.data.status
        },
        setBgColor(bgColor: string) {
            this.data.bgColor = bgColor
            return this.data.bgColor
        },
        addTask(task: FormData) {
            this.tasks.push(task)
        },
        deleteTask(id: number) {
            this.tasks = this.tasks.filter((item) => item.id !== id);
        },
        editTask(task: FormData) {
            let taskToEdit = this.tasks.find((item) => item.id === task.id);
            taskToEdit = task;
        }
    }
})