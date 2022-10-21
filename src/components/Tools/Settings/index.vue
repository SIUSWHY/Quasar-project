<template>
  <q-card>
    <div class="header-bg-color">
      <q-item>
        <q-item-section>
          <q-icon name="west" @click="$emit('close-modal', false)" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section side>
          <q-icon name="qr_code" @click="isQrCodeModalOpen = !isQrCodeModalOpen" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="1.5em"></q-icon>
        </q-item-section>
      </q-item>
      <q-item class="q-avatar-padding">
        <q-item-section side>
          <q-avatar rounded size="50px">
            <img
              :src="require('../../../assets/avatars/' + $store.getters['appData/getCurrentUser'].avatar)"
              alt="avatar"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ $store.getters['appData/getCurrentUser'].name }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <!-- <QrCodeModal v-bind="isQrCodeModalOpen" /> -->
  </q-card>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
