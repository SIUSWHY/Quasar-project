<template>
  <q-dialog
    persistent
    maximized
    transition-duration="200"
    transition-show="slide-left"
    transition-hide="slide-right"
    style="background: #1d1d1d"
  >
    <Chat @closeModal="$emit('close-modal', false)" />
  </q-dialog>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
