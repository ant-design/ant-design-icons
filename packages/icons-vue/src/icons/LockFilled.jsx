// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';

export default {
  name: 'IconLockFilled',
  displayName: 'LockFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LockFilledSvg } },
      children,
    ),
};