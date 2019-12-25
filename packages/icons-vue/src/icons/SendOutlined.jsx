// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';

export default {
  name: 'IconSendOutlined',
  displayName: 'SendOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SendOutlinedSvg } },
      children,
    ),
};