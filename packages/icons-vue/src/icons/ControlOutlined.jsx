// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';

export default {
  name: 'IconControlOutlined',
  displayName: 'ControlOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ControlOutlinedSvg } },
      children,
    ),
};