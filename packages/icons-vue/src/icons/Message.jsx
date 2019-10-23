
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MessageOutlineSvg from '@ant-design/icons-svg/lib/outline/MessageOutline';

export default {
  name: 'IconMessage',
  displayName: 'Message',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageOutlineSvg } },
      children
    ),
};
