<template>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

#app {
  font-family: "Outfit", sans-serif;
  background-color: $c-bg-default;
  color: $c-title-description;
  min-height: 100vh;

  @include flex(column, nowrap, flex-start, center);
}
</style>
