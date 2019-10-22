// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LoginSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined'

export default {
  name: 'Login',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LoginSvg } },
      children
    )
};