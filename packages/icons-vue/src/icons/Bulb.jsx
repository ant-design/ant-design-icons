
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BulbOutlineSvg from '@ant-design/icons-svg/lib/outline/BulbOutline';

export default {
  name: 'Bulb',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BulbOutlineSvg } },
      children
    ),
};
