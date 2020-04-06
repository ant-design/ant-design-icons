// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';

export default {
  name: 'IconUsbFilled',
  displayName: 'UsbFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UsbFilledSvg } },
      children,
    ),
};