<template>
  <q-dialog persistent maximized transition-duration="200" transition-show="slide-left" transition-hide="slide-right">
    <q-card>
      <q-card-section>
        <q-input v-model="text" :label="$t('chat.group.name_group')"></q-input>
      </q-card-section>
      <q-card-section>{{ $t('chat.group.members_group') }}</q-card-section>
      <q-card-section class="chip-position">
        <div v-for="chip in $store.state.appData.selectedUsers" :key="chip._id">
          <transition appear enter-active-class="animated fadeInDown" leave-active-class="animated fadeInDown">
            <q-chip>
              <q-avatar size="21px">
                <img :src="chip.avatar" alt="pic" />
              </q-avatar>
              {{ chip.name }}
            </q-chip>
          </transition>
        </div>
      </q-card-section>

      <q-separator dark></q-separator>
      <q-card-actions align="between">
        <q-btn color="secondary" @click="$emit('close-modal', false)">{{ $t('chat.group.cancel') }}</q-btn>
        <q-btn color="primary" @click="createGroup()">{{ $t('chat.group.create') }}</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
