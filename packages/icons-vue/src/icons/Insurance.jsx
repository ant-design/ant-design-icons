// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InsuranceSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined'

export default {
  name: 'Insurance',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InsuranceSvg } },
      children
    )
};