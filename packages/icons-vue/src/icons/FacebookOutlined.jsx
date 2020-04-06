// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FacebookOutlinedSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined';

export default {
  name: 'IconFacebookOutlined',
  displayName: 'FacebookOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FacebookOutlinedSvg } },
      children,
    ),
};