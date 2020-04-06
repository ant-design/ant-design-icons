// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';

export default {
  name: 'IconMessageFilled',
  displayName: 'MessageFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MessageFilledSvg } },
      children,
    ),
};