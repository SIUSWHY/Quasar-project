<template>
  <q-item clickable @click="selectData()">
    <q-item-section side>
      <q-avatar rounded size="50px">
        <img :src="avatar" :alt="name" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
