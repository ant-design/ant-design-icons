// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';

export default {
  name: 'IconUserOutlined',
  displayName: 'UserOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserOutlinedSvg } },
      children,
    ),
};