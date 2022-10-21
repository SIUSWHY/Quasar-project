<template>
  <q-dialog
    persistent
    maximized
    transition-duration="200"
    transition-show="slide-left"
    transition-hide="slide-right"
    style="background: #121212"
  >
    <component @closeModal="$emit('close-modal', false)" :is="currentComponent" />
  </q-dialog>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
