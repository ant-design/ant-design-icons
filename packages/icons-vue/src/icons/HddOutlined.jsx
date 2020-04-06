// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined';

export default {
  name: 'IconHddOutlined',
  displayName: 'HddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HddOutlinedSvg } },
      children,
    ),
};