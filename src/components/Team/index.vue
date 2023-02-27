<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <q-card-section class="text-h6">
        <div class="text-h5">Great!</div>
        <div class="text-subtitle2">Now you can create a team or join an existing one</div>
      </q-card-section>
      <q-separator dark inset></q-separator>
      <q-card-section class="position">
        <q-btn label="Create team" type="submit" color="secondary" @click="goToCreateTeam"> </q-btn>
        <div class="text-center q-my-sm">OR</div>
        <q-input filled label="Enter team link">
          <template v-slot:append>
            <q-icon name="arrow_forward" class="cursor-pointer"></q-icon>
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
