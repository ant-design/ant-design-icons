// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnapChatFilledSvg from '@ant-design/icons-svg/lib/asn/SnapChatFilled';

export default {
  name: 'IconSnapChatFilled',
  displayName: 'SnapChatFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnapChatFilledSvg } },
      children,
    ),
};
