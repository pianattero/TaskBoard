<template>
  <div>
    <div class="home-title">
      <h1><img src="@/assets/icons/Logo.svg"/> My Task Board</h1>
      <p>Tasks to keep organised</p>
    </div>
    <div>
      <TaskCard/>
    </div>
  </div>
</template>

<script setup lang="ts">
// IMPORTS
import TaskCard from '../components/TaskCard.vue'
</script>

<style scoped lang="scss">
.home-title {
  margin: 2rem 0;

  h1{
    font-weight: 400;
    font-size: 2.5rem;
  }
}
</style>
