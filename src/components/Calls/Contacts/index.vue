<template>
  <div>
    <q-item
      clickable
      v-ripple
      @click="
        () => {
          goToCall();
        }
      "
    >
      <q-item-section side>
        <q-avatar class="custom-border round-avatar" size="50px">
          <img :src="avatar" alt="pic" />
          <div v-if="isOnline">
            <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <q-badge class="q-badge-position" rounded floating color="green"></q-badge>
            </transition>
          </div>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ name }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
