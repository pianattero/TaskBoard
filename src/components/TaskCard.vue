<template>
    <div
    class="card-container">
        <div
        class="card-info"
        :style="{backgroundColor: icon?.bgColor}"
        @click="openTask"
        >
            <div class="task-description">
                <div>
                    <IconBtn
                    :icon-text="task?.icon"
                    :bg-color="'#F8FAFC'"
                    />
                    <div class="task-info">
                        <h3>{{ task?.name }}</h3>
                        <p v-if="task?.description">{{ task?.description }}</p>
                    </div>
                </div>
                <div>
                    <IconBtn
                    :icon-img="icon?.icon"
                    :bg-color="icon?.iconBgColor"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// IMPORTS
import { computed, type PropType } from 'vue';
import type { Task } from '@/types/form-data.types'
import { useFormDataStore } from "@/stores/formDataStore";

// STORES
const formDataStore = useFormDataStore();

// PROPS
const props = defineProps({
    task: {
        type: Object as PropType<Task>
    },
});

// COMPUTED
const icon = computed(() => {
    switch (props.task?.status) {
        case 'In Progress':
            return {
                icon: 'src/assets/icons/Done_round_duotone.svg',
                iconBgColor: '#E9A23B',
                bgColor: "#F5D565",
            };
        case 'Completed':
            return {
                icon: 'src/assets/icons/Time_atack_duotone.svg',
                iconBgColor: '#32D657',
                bgColor: '#A0ECB1',
            };
        case 'Do Later':
            return {
                icon: 'src/assets/icons/close_ring_duotone.svg',
                iconBgColor: '#DD524C',
                bgColor: '#F7D4D3',
            };
        case 'To do':
            return {
                icon: 'src/assets/icons/to_do.svg',
                iconBgColor: '#97A3B6',
                bgColor: '#E3E8EF',
            };
    }
});

// METHODS
const openTask = () => {
    formDataStore.taskSelectedId = props.task!.id;
    formDataStore.editMode = true;
    formDataStore.showModal = true;
}
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
    }
}
</style>