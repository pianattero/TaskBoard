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
                >
            </div>
            <div>
                <label>Description</label>
                <textarea
                type="text"
                maxlength="100"
                placeholder="Enter a short description"
                v-model="description"
                @change="setDescription(description)"/>

            </div>
            <div>
                <label>Icon</label>
                <div class="select">
                    <IconBtn
                    v-for="icon in icons"
                    :key="icon.icon"
                    :icon-text="icon.icon"
                    :bg-color="activeIcon === icon.icon ? '#F5D565' : '#E3E8EF'"
                    @click="setIcon(icon.icon)"
                    />
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
                    :border-color="activeStatus === status.name ? '0.15rem solid #3662E3' : '0.15rem solid #E3E8EF'"
                    @emit-status="setStatus(status.name), setBgColor(status.bgColor)"
                    />
                </div>
            </div>
        </div>
        <div class="form-btns">
            <FormBtn
            v-for="button in buttons"
            :key="button.text"
            :text="button.text"
            :icon="button.icon"
            :bg-color="button.bgColor"
            @emit-action="addTask({
                id: formDataStore.tasks.length++,
                name,
                description,
                icon: formDataStore.data.icon,
                status: formDataStore.data.status,
                bgColor: formDataStore.data.bgColor,
                })"
            @click="emit('emit-reset'), resetForm()"
            />
        </div>
    </form>
</template>

<script setup lang="ts">
// IMPORTS
import { computed, ref } from 'vue';;
import { useFormDataStore } from '@/stores/formDataStore';
import IconBtn from './IconBtn.vue';
import StatusCard from './StatusCard.vue';
import FormBtn from './FormBtn.vue';

// STORES
const formDataStore = useFormDataStore();

// COMPUTED
const activeIcon = computed(() => formDataStore.data.icon || '⏰');
const activeStatus = computed(() => formDataStore.data.status || 'To do');

// EMITS
const emit = defineEmits(['emit-reset'])

// DATA
const { setName, setDescription, setIcon, setStatus, setBgColor, addTask, deleteTask,data } = formDataStore
const name = ref('');
const description = ref('');
const icons = [
    {
        icon: '⏰'
    },
    {
        icon: '🏋️‍♂️'
    },
    {
        icon: '☕'
    },
    {
        icon: '👨‍💻'
    },
    {
        icon: '💬'
    }
];

const statusList = [
    {
        name: 'In Progress',
        icon: 'src/assets/icons/Time_atack_duotone.svg',
        iconBgColor: '#E9A23B',
        bgColor: '#F5D565'
    },
    {
        name: 'Completed',
        icon: 'src/assets/icons/Done_round_duotone.svg',
        iconBgColor: '#32D657',
        bgColor: '#A0ECB1'
    },
    {
        name: "Won`t do",
        icon: 'src/assets/icons/close_ring_duotone.svg',
        iconBgColor: '#DD524C',
        bgColor: '#F7D4D3'
    },
    {
        name: "To do",
        icon: 'src/assets/icons/circle.svg',
        iconBgColor: '#97A3B6',
        bgColor: '#E3E8EF'
    },
];

const buttons = [
    {
        text: 'Delete',
        icon: 'src/assets/icons/Trash.svg',
        bgColor: '#97A3B6',
    },
    {
        text: 'Save',
        icon: 'src/assets/icons/Done_round.svg',
        bgColor: '#3662E3'
    },
];

// METHODS
const resetForm = () => {
    name.value = ''
    description.value = ''
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
    textarea
    {
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
    }

    .form-btns {
        @include flex(row, nowrap, flex-end, center);
        width: 100%;
    }
}

</style>