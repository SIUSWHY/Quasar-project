<template>
  <q-dialog persistent maximized transition-duration="200" transition-show="slide-left" transition-hide="slide-right">
    <q-card>
      <q-card-section>Create Group</q-card-section>
      <q-card-section></q-card-section>
      <q-separator dark></q-separator>
      <q-card-actions>
        <q-space></q-space>
        <q-btn color="secondary" @click="$emit('close-modal', false)">Cancel</q-btn>
        <q-btn color="primary">GO</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
