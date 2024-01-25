<template>
    <div
    class="card-container">
        <div
        class="card-info"
        v-for="task in tasks"
        :key="task.name"
        :style="{backgroundColor: task.bgColor}"
        @click="emits('editTask', task)"
        >
            <div class="task-description">
                <div>
                    <IconBtn
                    :icon-text="task.icon"
                    :bg-color="'#F8FAFC'"
                    />
                    <div class="task-info">
                        <h3>{{ task.name }}</h3>
                        <p v-if="task.description">{{ task.description }}</p>
                    </div>
                </div>
                <div>
                    <IconBtn
                    v-if="task.status === 'In Progress'"
                    :icon-img="'src/assets/icons/Time_atack_duotone.svg'"
                    :bg-color="'#E9A23B'"
                    />
                    <IconBtn
                    v-else-if="task.status === 'Completed'"
                    :icon-img="'src/assets/icons/Done_round_duotone.svg'"
                    :bg-color="'#32D657'"
                    />
                    <IconBtn
                    v-else-if="task.status === 'Won`t do'"
                    :icon-img="'src/assets/icons/close_ring_duotone.svg'"
                    :bg-color="'#DD524C'"
                    />
                    <IconBtn
                    v-else
                    :icon-img="'src/assets/icons/circle.svg'"
                    :bg-color="'#97A3B6'"
                    />
                </div>
            </div>
        </div>
        <div
        class="card-info task-add"
        :style="{backgroundColor: '#F5E8D5'}"
        @click="emits('createTask')">
            <IconBtn
            :icon-img="'src/assets/icons/Add_round_duotone.svg'"
            :bg-color="'#E9A23B'"
            />
            <h3>Add new task</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
// IMPORTS
import IconBtn from '@/components/IconBtn.vue'
import { useFormDataStore } from '@/stores/formDataStore';
import { storeToRefs } from 'pinia';

// EMITS
// const emit = defineEmits(['emit-open', 'emit-edit'])
const emits = defineEmits({
    createTask() {
        return true
    },
    editTask(task) {
        return task
    },
})

// STORES
const formDataStore = useFormDataStore();
// - Form data
const { tasks } = storeToRefs(formDataStore);
</script>

<style scoped lang="scss">
.card-container{
    width: 40rem;

    @include media(){
        width: 80vw;
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

            .task-info {
                display: block;
                margin: 0 1rem;
            }
        }

        &.task-add {
            @include flex(row, nowrap, flex-start, center);
            font-size: 0.75rem;

            h3 {
                margin-left: 1rem;
            }
        }
    }
}
</style>