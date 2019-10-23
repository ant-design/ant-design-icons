
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InboxOutlineSvg from '@ant-design/icons-svg/lib/outline/InboxOutline';

export default {
  name: 'IconInbox',
  displayName: 'Inbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InboxOutlineSvg } },
      children
    ),
};
