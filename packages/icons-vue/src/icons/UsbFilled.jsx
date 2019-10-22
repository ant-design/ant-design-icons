
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsbFillSvg from '@ant-design/icons-svg/lib/fill/UsbFill';

export default {
  name: 'UsbFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsbFillSvg } },
      children
    ),
};
