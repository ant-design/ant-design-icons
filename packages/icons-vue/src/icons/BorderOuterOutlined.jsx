// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';

export default {
  name: 'IconBorderOuterOutlined',
  displayName: 'BorderOuterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderOuterOutlinedSvg } },
      children,
    ),
};