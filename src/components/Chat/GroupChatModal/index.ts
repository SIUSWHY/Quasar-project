import changeGroupImage from 'src/API/changeGroupImage';
import { defineComponent, ref } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'GroupChatInfo',
  props: {},
  data() {
    return {
      countOfMembers: this.$store.getters['appData/getCountMembersFromCurrentChat'],
      isNotify: ref(true),
      chat: this.$store.getters['appData/getCurrentChat'],
    };
  },
  methods: {
    ...mapActions('appData', {
      patchGroupAvatar: 'patchGroupAvatar',
    }),
    changeGroupImage() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/png, image/jpeg, image/gif';
      input.onchange = async () => {
        if (input.files !== null) {
          const chatId = this.chat.roomId;
          const response = new FormData();
          response.append('roomId', chatId);
          response.append('avatar', input.files[0]);
          const { data: patchGroup } = await changeGroupImage(response);
          this.patchGroupAvatar(patchGroup);
        }
      };
      input.click();
    },
  },
});
