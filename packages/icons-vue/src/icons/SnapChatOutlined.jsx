// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnapChatOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnapChatOutlined';

export default {
  name: 'IconSnapChatOutlined',
  displayName: 'SnapChatOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnapChatOutlinedSvg } },
      children,
    ),
};
