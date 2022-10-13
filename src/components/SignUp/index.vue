<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <div class="q-pa-md">
        <q-card-section class="text-h6 text-center">Sign Up</q-card-section>
        <q-form class="q-gutter-md">
          <q-input filled v-model="user.name" label="Your name"></q-input>
          <q-input filled v-model="user.email" label="Your email"></q-input>
          <q-input filled v-model="user.phone" label="Your phone number"></q-input>

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
          <!-- <div>
            Don't have an account?
            <router-link to="/sign_up">Sign up</router-link>
          </div> -->
        </q-form>
      </div>
      <q-card-actions align="around">
        <q-btn to="/" label="Cansel" type="submit" color="grey"> </q-btn>
        <q-btn
          @click="
            () => {
              createNewUser();
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
