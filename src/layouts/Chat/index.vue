<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar class="custom-border" rounded size="50px">
          <img :src="require('src/assets/avatars/' + room_img)" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ room_name }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
