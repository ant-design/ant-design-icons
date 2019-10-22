// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QqSvg from '@ant-design/icons-svg/lib/asn/QqOutlined'

export default {
  name: 'Qq',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QqSvg } },
      children
    )
};