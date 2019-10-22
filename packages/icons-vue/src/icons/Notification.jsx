// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import NotificationSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined'

export default {
  name: 'Notification',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NotificationSvg } },
      children
    )
};