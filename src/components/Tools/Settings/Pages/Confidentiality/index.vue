<template>
  <div>
    <q-item style="position: absolute; z-index: 1; width: 100%">
      <q-item-section side>
        <q-icon
          name="west"
          @click="
            () => {
              goBack();
            }
          "
          size="1.5em"
        ></q-icon>
      </q-item-section>
      <q-item-section> Confidentiality </q-item-section>
    </q-item>
    <q-item class="header-pisition">
      <q-item-section>
        <q-btn @click="openModal" color="negative" icon="account_circle" label="Delete account"></q-btn>
      </q-item-section>
      <q-dialog v-model="isModalOpen" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Are you sure you want to delete your account?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup></q-btn>
            <q-btn flat label="Delete" color="negative" :loading="isLoading" @click="deleteAccount"></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
