<template>
    <div class="card-container">
        <div
        class="card-info"
        v-for="title in titles"
        :key="title.title"
        :style="{backgroundColor: title.bgColor}"
        >
            <div>
                <IconBtn
                v-if="title.icon"
                :bg-color="title.iconBgColor"
                :icon-text="title.icon"
                />
                <IconBtn
                v-else
                :icon-img="title.btnIcon"
                :bg-color="title.btnBgColor"
                />
                <h3 :style="{fontSize: title.fontSize}">{{ title.title }}</h3>
            </div>

            <IconBtn
            v-show="title.hasButton"
            :icon-img="title.btnIcon"
            :bg-color="title.btnBgColor"
            />
            
        </div>
    </div>
</template>

<script setup lang="ts">
// IMPORTS
import { type taskDescription } from '@/types/task.types';
import IconBtn from '@/components/IconBtn.vue'

// DATA
const titles: taskDescription[] = [
    {
        icon: '⏰',
        title: 'Task in Progress',
        iconBgColor: '#F8FAFC',
        bgColor: '#F5D565',
        hasButton: true,
        btnIcon: 'src/assets/icons/Time_atack_duotone.svg',
        btnBgColor: '#E9A23B',
    },
    {
        icon: '🏋️‍♂️',
        title: 'Task Completed',
        iconBgColor: '#F8FAFC',
        bgColor: '#A0ECB1',
        hasButton: true,
        btnIcon: 'src/assets/icons/Done_round_duotone.svg',
        btnBgColor: '#32D657',
    },
    {
        icon: '☕',
        title: "Task Won't Do",
        iconBgColor: '#F8FAFC',
        bgColor: '#F7D4D3',
        hasButton: true,
        btnIcon: 'src/assets/icons/close_ring_duotone.svg',
        btnBgColor: '#DD524C'
    },
    {
        icon: '📚',
        title: 'Task To Do',
        iconBgColor: '#F8FAFC',
        bgColor: '#E3E8EF',
        hasButton: false,
    },
    {
        btnIcon: 'src/assets/icons/Add_round_duotone.svg',
        btnBgColor: '#E9A23B',
        title: 'Add new task',
        fontSize: '1rem',
        bgColor: '#F5E8D5',
        hasButton: false,
    },
];
</script>

<style scoped lang="scss">

.card-container{
    width: 40rem;
    .card-info {
        @include flex(row, nowrap, space-between, center);
        margin-bottom: 1rem;

        padding: 1rem;
        border-radius: $border-radius;
    
        div {
            @include flex(row, nowrap, center, center);

            h3 {
                margin-left: 1rem
            }
        }
    }
}
</style>