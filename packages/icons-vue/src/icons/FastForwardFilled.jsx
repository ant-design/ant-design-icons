// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';

export default {
  name: 'IconFastForwardFilled',
  displayName: 'FastForwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastForwardFilledSvg } },
      children,
    ),
};