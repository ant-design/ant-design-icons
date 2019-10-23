
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwapOutlineSvg from '@ant-design/icons-svg/lib/outline/SwapOutline';

export default {
  name: 'IconSwap',
  displayName: 'Swap',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapOutlineSvg } },
      children
    ),
};
