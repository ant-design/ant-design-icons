// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlertSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined'

export default {
  name: 'Alert',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlertSvg } },
      children
    )
};