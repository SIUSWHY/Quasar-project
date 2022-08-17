<template>
  <transition name="slide">
    <CreateGroup />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateGroup from '../CreateGroup/index.vue';

export default defineComponent({
  name: 'TransitionComponent',
  components: {
    CreateGroup,
  },
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 4s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
