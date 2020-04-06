// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';

export default {
  name: 'IconSlidersOutlined',
  displayName: 'SlidersOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlidersOutlinedSvg } },
      children,
    ),
};