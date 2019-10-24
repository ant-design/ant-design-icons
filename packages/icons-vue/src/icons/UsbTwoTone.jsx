
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/twotone/UsbTwoTone';

export default {
  name: 'IconUsbTwoTone',
  displayName: 'UsbTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsbTwoToneSvg } },
      children
    ),
};
