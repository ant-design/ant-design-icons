// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';

export default {
  name: 'IconLaptopOutlined',
  displayName: 'LaptopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LaptopOutlinedSvg } },
      children,
    ),
};