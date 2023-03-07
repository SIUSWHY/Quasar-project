<template>
  <div id="q-app" style="min-height: 100vh">
    <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
      <div class="q-pa-md">
        <q-card-section class="text-h6 text-center">{{ $t('sign_up.sign_up') }}</q-card-section>
        <q-form class="q-gutter-md">
          <q-input filled v-model="user.name" :label="$t('sign_up.name')"></q-input>
          <q-input filled v-model="user.email" :label="$t('sign_up.email')"></q-input>
          <q-input
            filled
            v-model="user.phone"
            :unmasked-value="true"
            mask="# (###) ### - ####"
            :label="$t('sign_up.phone')"
          ></q-input>

          <q-input
            filled
            :type="isPassword ? 'password' : 'text'"
            v-model="user.password"
            :label="$t('sign_up.password')"
          >
            <template v-slot:append>
              <q-icon
                :name="isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPassword = !isPassword"
              ></q-icon> </template
          ></q-input>
          <q-file
            filled
            v-model="user.avatar"
            :label="$t('sign_up.avatar')"
            accept="image/png, image/jpeg, image/gif"
          ></q-file>
        </q-form>
      </div>
      <q-card-actions align="around">
        <q-btn to="/" :label="$t('sign_up.cancel')" type="submit" color="grey"> </q-btn>
        <q-btn
          @click="
            () => {
              createNewUser();
            }
          "
          :loading="isLoading"
          :label="$t('sign_up.submit')"
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
