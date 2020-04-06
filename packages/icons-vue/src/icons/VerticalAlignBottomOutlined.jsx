// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined';

export default {
  name: 'IconVerticalAlignBottomOutlined',
  displayName: 'VerticalAlignBottomOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerticalAlignBottomOutlinedSvg } },
      children,
    ),
};