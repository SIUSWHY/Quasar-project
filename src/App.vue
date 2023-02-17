<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss" scoped>
::v-deep {
  .body--light {
    background-color: blue;
    div.q-item__label {
      color: black !important;
    }
  }

  .body--dark {
    /* ... */
  }
}
</style>
