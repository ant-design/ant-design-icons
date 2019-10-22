// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined'

export default {
  name: 'Check',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSvg } },
      children
    )
};