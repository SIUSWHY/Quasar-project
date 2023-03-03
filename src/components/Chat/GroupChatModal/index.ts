import { useQuasar } from 'quasar';
import changeGroupImage from 'src/API/Room/changeGroupImage';
import changeGroupName from 'src/API/Room/changeGroupName';
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'GroupChatInfo',
  props: {},
  data() {
    return {
      $q: useQuasar(),
      countOfMembers: this.$store.getters['appData/getCountMembersFromCurrentChat'],
      isNotify: ref(true),
      chat: this.$store.getters['appData/getCurrentChat'],
    };
  },
  methods: {
    ...mapActions('appData', {
      patchGroupAvatar: 'patchGroupAvatar',
      setNewChatName: 'setNewChatName',
    }),
    ...mapActions('chatData', {
      setNewGroupName: 'setNewGroupName',
    }),
    ...mapGetters('chatData', { getCompanion: 'getCompanion' }),
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

    changeGroupName() {
      this.$q
        .dialog({
          title: 'Enter new group name',
          prompt: {
            model: this.getCompanion().name,
            type: 'text', // optional
          },
          cancel: true,
          persistent: true,
        })
        .onOk(async (data: string) => {
          const group = this.getCompanion();
          if (data !== group.name) {
            await changeGroupName({ newName: data, _id: group._id });
            this.setNewGroupName(data);
            this.setNewChatName({ _id: group._id, room_name: data });
          }
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    },
  },
});
