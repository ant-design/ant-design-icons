
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwapLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/SwapLeftOutline';

export default {
  name: 'SwapLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapLeftOutlineSvg } },
      children
    ),
};
