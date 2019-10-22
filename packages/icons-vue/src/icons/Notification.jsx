
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NotificationOutlineSvg from '@ant-design/icons-svg/lib/outline/NotificationOutline';

export default {
  name: 'Notification',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NotificationOutlineSvg } },
      children
    ),
};
