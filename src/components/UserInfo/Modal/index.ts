import { defineComponent } from 'vue';
import Settings from '../../Tools/Settings/index.vue';

export default defineComponent({
  name: 'UserInfoModal',
  components: {
    Settings,
  },
  data() {
    return {
      currentComponent: 'Settings',
    };
  },
  methods: {},
});
