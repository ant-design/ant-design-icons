// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';

export default {
  name: 'IconSignalFilled',
  displayName: 'SignalFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SignalFilledSvg } },
      children,
    ),
};