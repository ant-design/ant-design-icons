
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BulbTwoTone';

export default {
  name: 'IconBulbTwoTone',
  displayName: 'BulbTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BulbTwoToneSvg } },
      children
    ),
};
