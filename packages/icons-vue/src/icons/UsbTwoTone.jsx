// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';

export default {
  name: 'IconUsbTwoTone',
  displayName: 'UsbTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UsbTwoToneSvg } },
      children,
    ),
};