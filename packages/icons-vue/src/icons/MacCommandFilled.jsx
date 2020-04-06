// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';

export default {
  name: 'IconMacCommandFilled',
  displayName: 'MacCommandFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MacCommandFilledSvg } },
      children,
    ),
};