// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';

export default {
  name: 'IconCarOutlined',
  displayName: 'CarOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CarOutlinedSvg } },
      children,
    ),
};