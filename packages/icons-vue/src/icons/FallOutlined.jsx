// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';

export default {
  name: 'IconFallOutlined',
  displayName: 'FallOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FallOutlinedSvg } },
      children,
    ),
};