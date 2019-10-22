
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GiftOutlineSvg from '@ant-design/icons-svg/lib/outline/GiftOutline';

export default {
  name: 'Gift',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GiftOutlineSvg } },
      children
    ),
};
