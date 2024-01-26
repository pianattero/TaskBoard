<template>
  <button type="button" class="btn-container">
    <img class="icon-btn" :style="{ backgroundColor: bgColor }" :src="icon" />
  </button>
</template>

<script setup lang="ts">
// PROPS
defineProps({
  icon: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    require: true,
  },
});
</script>

<style scoped lang="scss">
.btn-container {
  margin: 0 0.2rem;
  width: 2.5rem;
  height: 2.5rem;

  .icon-btn {
    padding: 0.5rem;
    border-radius: $border-radius;
    width: 100%;
    height: 100%;
  }
}
</style>
