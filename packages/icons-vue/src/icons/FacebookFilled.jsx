// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled';

export default {
  name: 'IconFacebookFilled',
  displayName: 'FacebookFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FacebookFilledSvg } },
      children,
    ),
};