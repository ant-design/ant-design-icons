// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LogoutSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined'

export default {
  name: 'Logout',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LogoutSvg } },
      children
    )
};