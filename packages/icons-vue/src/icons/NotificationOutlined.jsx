// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';

export default {
  name: 'IconNotificationOutlined',
  displayName: 'NotificationOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NotificationOutlinedSvg } },
      children,
    ),
};