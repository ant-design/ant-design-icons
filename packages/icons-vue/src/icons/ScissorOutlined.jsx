// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';

export default {
  name: 'IconScissorOutlined',
  displayName: 'ScissorOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScissorOutlinedSvg } },
      children,
    ),
};