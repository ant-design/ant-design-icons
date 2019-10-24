
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NotificationFillSvg from '@ant-design/icons-svg/lib/fill/NotificationFill';

export default {
  name: 'IconNotificationFilled',
  displayName: 'NotificationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NotificationFillSvg } },
      children
    ),
};
