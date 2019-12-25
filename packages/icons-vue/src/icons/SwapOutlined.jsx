// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';

export default {
  name: 'IconSwapOutlined',
  displayName: 'SwapOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwapOutlinedSvg } },
      children,
    ),
};