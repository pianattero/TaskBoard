<template>
    <Transition name="modal-animation">
        <div  v-show="props.modalActive" class="modal">
            <Transition name="modal-animation-inner">
                <div  v-show="props.modalActive" class="modal-inner">
                    <div class="modal-header">
                        <h4>Task details</h4>
                        <IconBtn
                        :icon-img="'src/assets/icons/close_ring_duotone-1.svg'"
                        :bg-color="'#F8FAFC'"
                        :style="{border: '0.15rem solid #E3E8EF', borderRadius: '0.7rem'}"
                        @click="emit('emit-close')"
                        />
                    </div>
                    <!-- Modal Content -->
                    <slot/>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
// IMPORTS
import IconBtn from './IconBtn.vue';

//PROPS 
const props = defineProps({
    modalActive: {
    type: Boolean,
    default: false,
    },
 });

// EMITS
const emit = defineEmits(['emit-close'])
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

    @include media(){
        width: 90vw;
        height: 90vh;
        right: 2%;
    }
    .modal-inner {
        .modal-header {
            @include flex(row, nowrap, space-between, center)
        }
    }
}
</style>