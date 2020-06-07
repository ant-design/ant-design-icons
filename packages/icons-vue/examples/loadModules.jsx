import { createApp } from 'vue';
import * as AntdIcons from '../src/icons';

const SimpleDemo = {
  mounted() {
    console.log(AntdIcons);
  },
  render() {
    return null;
  },
};

createApp(SimpleDemo).mount('#__vue-content>div');
