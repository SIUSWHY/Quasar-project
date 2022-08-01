<template>
  <q-item clickable v-ripple to="chat">
    <q-item-section side>
      <q-avatar rounded size="50px">
        <img :src="avatar" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>{{ caption }} new messages</q-item-label>
    </q-item-section>
    <q-item-section side> {{ time }} min ago </q-item-section>
  </q-item>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
