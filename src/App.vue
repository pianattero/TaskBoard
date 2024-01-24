<template>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

html,
body {
  background-color: $c-bg-default;
}

#app {
  font-family: "Outfit", sans-serif;
  background-color: $c-bg-default;
  color: $c-title-description;
}
</style>
