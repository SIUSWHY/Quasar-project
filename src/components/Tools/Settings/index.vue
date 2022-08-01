<template>
  <q-item>
    <q-item-section side>
      <router-link to="/chat_layout">
        <q-icon name="west" size="1.5em" @click="toggleRightDrawer"></q-icon>
      </router-link>
    </q-item-section>
    <q-item-section>
      <q-item-label>Settings</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="more_vert" size="1.5em"></q-icon>
    </q-item-section>
  </q-item>
  <h5>Settings</h5>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
