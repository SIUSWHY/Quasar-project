<template>
  <q-item @click="goTo()" clickable target="_blank">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    rightDrawerOpen: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    goTo() {
      this.$router.push(this.$props.link);
    },
  },
});
</script>
