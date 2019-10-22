// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone'

export default {
  name: 'InsuranceTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InsuranceTwoToneSvg } },
      children
    )
};