// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';

export default {
  name: 'IconDollarOutlined',
  displayName: 'DollarOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DollarOutlinedSvg } },
      children,
    ),
};