// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined';

export default {
  name: 'IconRadiusBottomleftOutlined',
  displayName: 'RadiusBottomleftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadiusBottomleftOutlinedSvg } },
      children,
    ),
};