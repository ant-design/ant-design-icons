// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';

export default {
  name: 'IconLockOutlined',
  displayName: 'LockOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LockOutlinedSvg } },
      children,
    ),
};