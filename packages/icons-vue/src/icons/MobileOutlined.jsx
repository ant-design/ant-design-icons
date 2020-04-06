// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';

export default {
  name: 'IconMobileOutlined',
  displayName: 'MobileOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MobileOutlinedSvg } },
      children,
    ),
};