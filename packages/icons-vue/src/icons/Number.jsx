// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import NumberSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined'

export default {
  name: 'Number',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NumberSvg } },
      children
    )
};