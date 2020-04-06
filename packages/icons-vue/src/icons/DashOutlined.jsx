// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';

export default {
  name: 'IconDashOutlined',
  displayName: 'DashOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DashOutlinedSvg } },
      children,
    ),
};