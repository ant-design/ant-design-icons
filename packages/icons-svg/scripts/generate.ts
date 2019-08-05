import { generate } from '@ant-design/icon-kit';
import configs from '../iconkit.config';

generate(configs).then(() => {
  console.log('done.');
});
