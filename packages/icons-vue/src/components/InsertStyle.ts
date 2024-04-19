import { defineComponent } from 'vue';
import { useInsertStyles } from '../utils';

export const InsertStyles = defineComponent({
  name: 'InsertStyles',
  setup() {
    useInsertStyles();
    return () => {
      return null;
    };
  },
});
