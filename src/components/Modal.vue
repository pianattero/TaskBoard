<template>
  <Transition name="modal-animation">
    <div class="modal">
      <Transition name="modal-animation-inner">
        <div class="modal-inner">
          <div class="modal-header">
            <h4>Task details</h4>
            <IconBtn
              class="close-icon"
              :icon="'src/assets/icons/close_ring_duotone-1.svg'"
              :bg-color="'#F8FAFC'"
              @click="emit('emit-close')"
            />
          </div>
          <!-- Modal Content -->
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
// EMITS
const emit = defineEmits(["emit-close"]);
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  background-color: $c-bg-default;
  border-radius: $border-radius;
  width: 38rem;
  height: 90vh;
  padding: 1rem;
  margin: 1rem;

  @include media() {
    width: 90vw;
    height: 90vh;
    right: 2%;
  }
  .modal-inner {
    .modal-header {
      @include flex(row, nowrap, space-between, center);
      .close-icon {
        border: 0.15rem solid #e3e8ef;
        border-radius: 0.7rem;
        cursor: pointer;
      }
    }
  }
}
</style>
