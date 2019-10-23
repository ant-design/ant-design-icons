
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LaptopOutlineSvg from '@ant-design/icons-svg/lib/outline/LaptopOutline';

export default {
  name: 'IconLaptop',
  displayName: 'Laptop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LaptopOutlineSvg } },
      children
    ),
};
