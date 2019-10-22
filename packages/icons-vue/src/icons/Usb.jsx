
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsbOutlineSvg from '@ant-design/icons-svg/lib/outline/UsbOutline';

export default {
  name: 'Usb',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsbOutlineSvg } },
      children
    ),
};
