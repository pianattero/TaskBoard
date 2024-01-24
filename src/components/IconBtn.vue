<template>
    <span
    v-if="props.iconText"
    class="icon-btn"
    :style="{backgroundColor: props.bgColor}"
    >{{ props.iconText }}</span>
    
    <img
    v-else="props.iconImg"
    class="icon-btn"
    :style="{backgroundColor: props.bgColor}"
    :src="props.iconImg"
    />
</template>

<script setup lang="ts">
// PROPS
const props = defineProps({
  iconText: {
    type: String,
  },
  iconImg: {
    type: String,
  },
  bgColor: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.icon-btn {
    padding: 0.5rem;
    border-radius: $border-radius;
}
</style>