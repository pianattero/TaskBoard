<template>
  <button
  type="button"
  class="btn-container"
  >
    <p
    v-if="props.iconText"
    class="icon-btn"
    :style="{backgroundColor: props.bgColor}"
    >{{ props.iconText }}</p>
    
    <img
    v-else="props.iconImg"
    class="icon-btn"
    :style="{backgroundColor: props.bgColor}"
    :src="props.iconImg"
    />
  </button>
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