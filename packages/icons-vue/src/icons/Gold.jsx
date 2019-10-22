
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldOutlineSvg from '@ant-design/icons-svg/lib/outline/GoldOutline';

export default {
  name: 'Gold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldOutlineSvg } },
      children
    ),
};
