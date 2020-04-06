// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined';

export default {
  name: 'IconArrowsAltOutlined',
  displayName: 'ArrowsAltOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ArrowsAltOutlinedSvg } },
      children,
    ),
};