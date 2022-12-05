<template>
  <div>
    <div>
      <q-item v-ripple>
        <q-item-section side>
          <q-avatar class="custom-border round-avatar" size="50px">
            <img :src="avatar" alt="pic" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-section class="date-container">
            <q-icon
              :name="$store.getters['appData/getCurrentUser']._id === userId ? 'call_made' : 'call_received'"
              color="positive"
            ></q-icon>
            <div>{{ date }} at {{ time }}</div>
          </q-item-section>
        </q-item-section>
        <q-item-section side>
          <q-icon name="call" color="primary" size="20px" @click="goToCall()"></q-icon>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
