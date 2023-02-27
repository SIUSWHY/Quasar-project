<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <q-card-section class="text-h6">
        <div class="text-h6">Create your team</div>
      </q-card-section>
      <q-separator dark inset></q-separator>
      <q-card-section class="position">
        <q-form class="q-gutter-md">
          <q-input filled v-model="team.name" @change="setNewLink" label="Enter team name"></q-input>
          <q-input
            readonly
            hint="Your team invite link"
            v-model="team.link"
            filled
            type="text"
            prefix="https://hermes-server.online/"
          >
          </q-input>
          <q-file filled v-model="team.avatar" label="Team logo" accept="image/png, image/jpeg, image/gif"></q-file>
        </q-form>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn to="/join_to_team" label="Cancel" type="submit" color="grey"> </q-btn>
        <q-btn :loading="isLoading" label="Create" type="submit" color="primary" @click="createTeam"> </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
