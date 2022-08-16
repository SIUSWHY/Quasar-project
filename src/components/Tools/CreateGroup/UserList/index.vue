<template>
  <q-item clickable>
    <q-item-section side>
      <q-avatar rounded size="50px">
        <img :src="require('src/assets/avatars/' + avatar)" />
        <q-badge align="bottom" floating rounded>
          <q-icon name="done" size="10px"></q-icon>
        </q-badge>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
