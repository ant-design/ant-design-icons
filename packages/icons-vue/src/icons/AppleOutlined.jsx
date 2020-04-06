// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';

export default {
  name: 'IconAppleOutlined',
  displayName: 'AppleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppleOutlinedSvg } },
      children,
    ),
};