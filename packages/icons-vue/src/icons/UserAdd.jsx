// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UserAddSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined'

export default {
  name: 'UserAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserAddSvg } },
      children
    )
};