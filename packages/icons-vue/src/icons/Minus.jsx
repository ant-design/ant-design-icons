// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MinusSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined'

export default {
  name: 'Minus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusSvg } },
      children
    )
};