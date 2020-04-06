// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined';

export default {
  name: 'IconArrowUpOutlined',
  displayName: 'ArrowUpOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ArrowUpOutlinedSvg } },
      children,
    ),
};