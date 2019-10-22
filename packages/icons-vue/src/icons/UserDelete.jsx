// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UserDeleteSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined'

export default {
  name: 'UserDelete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserDeleteSvg } },
      children
    )
};