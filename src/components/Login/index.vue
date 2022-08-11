<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <div class="q-pa-md">
        <q-card-section class="text-h6 text-center">Login</q-card-section>
        <q-form class="q-gutter-md">
          <q-input filled v-model="user.name" label="Your username or email"></q-input>

          <q-input filled type="password" v-model="user.password" label="Your password"></q-input>

          <div>
            <q-btn
              @click="
                () => {
                  loginUser();
                }
              "
              label="Submit"
              type="submit"
              color="primary"
            >
            </q-btn>
          </div>
        </q-form>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
