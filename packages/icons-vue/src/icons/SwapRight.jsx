
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwapRightOutlineSvg from '@ant-design/icons-svg/lib/outline/SwapRightOutline';

export default {
  name: 'IconSwapRight',
  displayName: 'SwapRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapRightOutlineSvg } },
      children
    ),
};
