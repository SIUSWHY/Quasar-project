<template>
  <q-avatar square size="300px">
    <img :src="require('../../assets/avatars/' + currentUserAvatar)" alt="avatar" />
  </q-avatar>
  <q-list>
    <strong>
      <UserActions
        @click="toggleRightDrawer"
        :to="link.link"
        v-for="link in userActions"
        :key="link.title"
        v-bind="link"
      />
    </strong>
  </q-list>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
