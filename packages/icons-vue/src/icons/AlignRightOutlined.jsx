// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined';

export default {
  name: 'IconAlignRightOutlined',
  displayName: 'AlignRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlignRightOutlinedSvg } },
      children,
    ),
};