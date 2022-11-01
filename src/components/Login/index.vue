<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <div class="q-pa-md">
        <q-card-section class="text-h6 text-center">Login</q-card-section>
        <q-form class="q-gutter-md">
          <q-input filled v-model="user.name" :label="$t('login.your_username')"></q-input>

          <q-input
            filled
            :type="isPassword ? 'password' : 'text'"
            v-model="user.password"
            :label="$t('login.your_password')"
          >
            <template v-slot:append>
              <q-icon
                :name="isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPassword = !isPassword"
              ></q-icon> </template
          ></q-input>
          <div class="spacer">OR</div>
          <div class="spacer">
            <div class="skeleton-position" v-if="socket_id === null">
              <q-skeleton height="200px" width="200px"></q-skeleton>
            </div>
            <div v-else>
              <vue-qr class="qr" :logoSrc="require('../../../src/assets/app-icon.svg')" :text="socket_id"></vue-qr>
            </div>
          </div>
          <div>
            Don't have an account?
            <router-link style="color: #1976d2 !important" to="/sign_up">Sign up</router-link>
          </div>
        </q-form>
      </div>
      <q-card-actions align="right">
        <q-btn
          @click="
            () => {
              loginUser();
            }
          "
          :loading="isLoading"
          label="Submit"
          type="submit"
          color="primary"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
