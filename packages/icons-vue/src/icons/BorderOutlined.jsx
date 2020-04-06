// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';

export default {
  name: 'IconBorderOutlined',
  displayName: 'BorderOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderOutlinedSvg } },
      children,
    ),
};