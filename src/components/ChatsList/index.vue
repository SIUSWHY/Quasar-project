<template>
  <q-item clickable v-ripple>
    <q-item-section side>
      <q-avatar class="custom-border" rounded size="50px">
        <img :src="require('src/assets/avatars/' + avatar)" />
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
