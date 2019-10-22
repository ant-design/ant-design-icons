// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoogleSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined'

export default {
  name: 'Google',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleSvg } },
      children
    )
};