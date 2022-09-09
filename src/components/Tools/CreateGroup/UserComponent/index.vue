<template>
  <q-item
    class="custom_target"
    clickable
    @click="
      () => {
        clickToChouseChat();
      }
    "
  >
    <q-item-section side>
      <q-avatar rounded size="50px">
        <img style="border-radius: 25px" :src="require('src/assets/avatars/' + avatar)" />
        <div v-if="$store.state.userList.selectedUsers.includes(_id)">
          <q-badge class="bottom-position" align="bottom" floating rounded>
            <q-icon name="done" size="11px"></q-icon>
          </q-badge>
        </div>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
