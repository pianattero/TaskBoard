<template>
    <button
    type="button"
    @click="emit('btnAction')"
    class="form-btn"
    :style="{backgroundColor: props.bgColor}"
    >
    <span>{{ props.text }}</span>
    <img :src="props.icon"/>
    </button>
</template>

<script setup lang="ts">
// PROPS
const props = defineProps({
    text: {
        type: String
    },
    icon: {
        type: String
    },
    bgColor: {
        type: String
    },
});

// EMITS
const emit = defineEmits(['btnAction'])
</script>

<style scoped lang="scss">
.form-btn{
    @include flex(row, nowrap, space-evenly, center);
    border-radius: 2rem;
    padding: 0.2rem 0.5rem;
    width: 6rem;
    color: $c-white;
    font-weight: 300;
    margin: 0 0.5rem;
}
</style>