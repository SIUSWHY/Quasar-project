<template>
  <div>
    <div v-if="$store.state.appData.currentChat.chatType === 'double'">
      <div v-if="this.message.label">
        <q-chat-message text-color="white" bg-color="grey-9" :label="this.message.label"></q-chat-message>
      </div>
      <div v-else>
        <div v-if="this.message.userId === $store.state.appData.currentUser?._id">
          <div v-if="this.message.type === 'file'">
            <q-chat-message bg-color="light-blue-9" :sent="true" text-color="white">
              <template v-slot:default>
                <div class="attach-message">
                  <q-icon
                    class="attach-bg-icon"
                    size="1.7em"
                    name="arrow_downward"
                    @click="downloadFile(this.message.fileUrl, this.message.messageText[0])"
                  ></q-icon>
                  {{ this.message.messageText[0] }}
                </div>
              </template>
              <template v-slot:stamp>
                <div class="stamp-direction">
                  <div class="stamp">{{ this.message.stamp }}</div>
                  <div>
                    <div v-if="this.message.whoRead[1] !== undefined">
                      <q-icon size="15px" color="blue-10" name="done_all"></q-icon>
                    </div>
                    <div v-else>
                      <q-icon size="15px" color="teal-5" name="done_all"></q-icon>
                    </div>
                  </div>
                </div>
              </template>
            </q-chat-message>
          </div>
          <div v-else>
            <q-chat-message
              @click="messActions(this.message._id)"
              bg-color="light-blue-9"
              :sent="true"
              text-color="white"
            >
              <template v-slot:default>
                <div class="url-card" v-if="this.message?.urlData">
                  <div class="title">{{ this.message.messageText[0] }}</div>
                  <div class="url-card-border">
                    <div class="border"></div>
                    <div>
                      <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                      <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                      <div class="title">{{ this.message.urlData.title }}</div>
                      <div>{{ this.message.urlData.description }}</div>
                    </div>
                  </div>
                </div>
                <div v-else>{{ this.message.messageText[0] }}</div>
              </template>
              <template v-slot:stamp>
                <div class="stamp-direction">
                  <div class="stamp">{{ this.message.stamp }}</div>
                  <div>
                    <div v-if="this.message.whoRead[1] !== undefined">
                      <q-icon size="15px" color="blue-10" name="done_all"></q-icon>
                    </div>
                    <div v-else>
                      <q-icon size="15px" color="teal-5" name="done_all"></q-icon>
                    </div>
                  </div>
                </div>
              </template>
            </q-chat-message>
          </div>
        </div>
        <div v-else>
          <div v-if="this.message.type === 'file'">
            <q-chat-message text-color="white" bg-color="grey-9" :sent="false" :stamp="this.message.stamp">
              <template v-slot:default>
                <div class="url-card" v-if="this.message?.urlData">
                  <div class="title">{{ this.message.messageText[0] }}</div>
                  <div class="url-card-border">
                    <div class="border"></div>
                    <div>
                      <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                      <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                      <div class="title">{{ this.message.urlData.title }}</div>
                      <div>{{ this.message.urlData.description }}</div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="attach-message">
                    <q-icon
                      class="attach-bg-icon"
                      size="1.7em"
                      name="arrow_downward"
                      @click="downloadFile(this.message.fileUrl, this.message.messageText[0])"
                    ></q-icon>
                    {{ this.message.messageText[0] }}
                  </div>
                </div>
              </template>
            </q-chat-message>
          </div>
          <div v-else>
            <q-chat-message text-color="white" bg-color="grey-9" :sent="false" :stamp="this.message.stamp">
              <template v-slot:default>
                <div class="url-card" v-if="this.message?.urlData">
                  <div class="title">{{ this.message.messageText[0] }}</div>
                  <div class="url-card-border">
                    <div class="border"></div>
                    <div>
                      <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                      <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                      <div class="title">{{ this.message.urlData.title }}</div>
                      <div>{{ this.message.urlData.description }}</div>
                    </div>
                  </div>
                </div>
                <div v-else>{{ this.message.messageText[0] }}</div>
              </template>
            </q-chat-message>
          </div>
        </div>
      </div>
    </div>
    <!-- group chat component -->
    <div v-else>
      <div v-if="this.message.label">
        <q-chat-message text-color="white" bg-color="grey-9" :label="this.message.label"></q-chat-message>
      </div>
      <div v-else-if="this.message.userId === $store.state.appData.currentUser?._id">
        <!-- user component attach file -->
        <div v-if="this.message.type === 'file'">
          <q-chat-message bg-color="light-blue-9" :sent="true" text-color="white">
            <template v-slot:default>
              <div class="attach-message">
                <q-icon
                  class="attach-bg-icon"
                  size="1.7em"
                  name="arrow_downward"
                  @click="downloadFile(this.message.fileUrl, this.message.messageText[0])"
                ></q-icon>
                {{ this.message.messageText[0] }}
              </div>
            </template>
            <template v-slot:stamp>
              <div class="stamp-direction">
                <div class="stamp">{{ this.message.stamp }}</div>
                <div>
                  <div v-if="this.message.whoRead[1] !== undefined">
                    <q-icon size="15px" color="blue-10" name="done_all"></q-icon>
                  </div>
                  <div v-else>
                    <q-icon size="15px" color="teal-5" name="done_all"></q-icon>
                  </div>
                </div>
              </div>
            </template>
          </q-chat-message>
        </div>
        <div v-else>
          <q-chat-message bg-color="light-blue-9" :sent="true" text-color="white">
            <template v-slot:default>
              <div class="url-card" v-if="this.message?.urlData">
                <div class="title">{{ this.message.messageText[0] }}</div>
                <div class="url-card-border">
                  <div class="border"></div>
                  <div>
                    <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                    <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                    <div class="title">{{ this.message.urlData.title }}</div>
                    <div>{{ this.message.urlData.description }}</div>
                  </div>
                </div>
              </div>
              <div v-else>{{ this.message.messageText[0] }}</div>
            </template>
            <template v-slot:stamp>
              <div class="stamp-direction">
                <div class="stamp">{{ this.message.stamp }}</div>
                <div>
                  <div v-if="this.message.whoRead[1] !== undefined">
                    <q-icon size="15px" color="blue-10" name="done_all"></q-icon>
                  </div>
                  <div v-else>
                    <q-icon size="15px" color="teal-5" name="done_all"></q-icon>
                  </div>
                </div>
              </div>
            </template>
          </q-chat-message>
        </div>
      </div>
      <div v-else>
        <div v-if="this.message.type === 'file'">
          <q-chat-message
            text-color="white"
            bg-color="grey-9"
            :sent="false"
            :name="user?.name"
            :stamp="this.message.stamp"
          >
            <template v-slot:default>
              <div class="url-card" v-if="this.message?.urlData">
                <div class="title">{{ this.message.messageText[0] }}</div>
                <div class="url-card-border">
                  <div class="border"></div>
                  <div>
                    <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                    <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                    <div class="title">{{ this.message.urlData.title }}</div>
                    <div>{{ this.message.urlData.description }}</div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="attach-message">
                  <q-icon
                    class="attach-bg-icon"
                    size="1.7em"
                    name="arrow_downward"
                    @click="downloadFile(this.message.fileUrl, this.message.messageText[0])"
                  ></q-icon>
                  {{ this.message.messageText[0] }}
                </div>
              </div>
            </template>
            <template v-slot:avatar>
              <q-avatar :rounded="false" size="30px" style="margin-right: 10px">
                <img :src="user?.avatar" alt="pic" />
              </q-avatar>
            </template>
          </q-chat-message>
        </div>
        <!-- companion message component -->
        <div v-else>
          <q-chat-message
            text-color="white"
            bg-color="grey-9"
            :sent="false"
            :name="user?.name"
            :stamp="this.message.stamp"
          >
            <template v-slot:default>
              <div class="url-card" v-if="this.message?.urlData">
                <div class="title">{{ this.message.messageText[0] }}</div>
                <div class="url-card-border">
                  <div class="border"></div>
                  <div>
                    <a :href="this.message.urlData.url" target="_blank">{{ this.message.urlData.url }}</a>
                    <q-img :src="this.message.urlData.img" spinner-color="white"></q-img>
                    <div class="title">{{ this.message.urlData.title }}</div>
                    <div>{{ this.message.urlData.description }}</div>
                  </div>
                </div>
              </div>
              <div v-else>{{ this.message.messageText[0] }}</div>
            </template>
            <template v-slot:avatar>
              <q-avatar :rounded="false" size="30px" style="margin-right: 10px">
                <img :src="user?.avatar" alt="pic" />
              </q-avatar>
            </template>
          </q-chat-message>
        </div>
      </div>
    </div>
    <!-- <div class="actions-bg-color" v-if="isActionsOpen">
      <q-item>
        <q-item-section side>
          <q-icon name="content_copy" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section>Copy</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="edit" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section>Edit</q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-icon name="delete" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section>Delete</q-item-section>
      </q-item>
    </div> -->
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
