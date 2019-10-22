// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UserSvg from '@ant-design/icons-svg/lib/asn/UserOutlined'

export default {
  name: 'User',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserSvg } },
      children
    )
};