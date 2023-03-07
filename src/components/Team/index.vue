<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <q-card-section class="text-h6">
        <div class="text-h5">{{ $t('team.title') }}</div>
        <div class="text-subtitle2">{{ $t('team.sub') }}</div>
      </q-card-section>
      <q-separator dark inset></q-separator>
      <q-card-section class="position">
        <q-btn :label="$t('team.create_team')" type="submit" color="secondary" @click="goToCreateTeam"> </q-btn>
        <div class="text-center q-my-sm">{{ $t('or') }}</div>
        <q-input v-model="link" filled :label="$t('team.join.title')">
          <template v-slot:append>
            <q-icon name="arrow_forward" class="cursor-pointer" @click="joinToTeam"></q-icon>
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
