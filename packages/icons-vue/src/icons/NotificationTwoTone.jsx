// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone'

export default {
  name: 'NotificationTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NotificationTwoToneSvg } },
      children
    )
};