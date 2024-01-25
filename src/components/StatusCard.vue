<template>
    <button
    type="button"
    @click="emit('emit-status')"
    >
        <div
        class="status-container"
        :style="{border: props.borderColor}"
        >
            <IconBtn
            :icon-img="props.icon"
            :bg-color="props.bgColor"
            />
            <h4>{{ props.name }}</h4>
        </div>
    </button>
</template>

<script setup lang="ts">
// IMPORTS
import IconBtn from './IconBtn.vue';

// PROPS
const props = defineProps({
    name: String,
    icon: String,
    bgColor: String,
    borderColor: String,
});

// EMITS

 //EMITS
 const emit = defineEmits(['emit-status']);
</script>

<style scoped lang="scss">
.status-container {
    @include flex(row, nowrap, flex-start, center);
    border-radius: $border-radius;
    padding: 0.2rem;
    margin: 0.2rem;
    min-width: 17rem;

    h4 {
        margin-left: 0.6rem;
        font-weight: 400;
    }
}

</style>
