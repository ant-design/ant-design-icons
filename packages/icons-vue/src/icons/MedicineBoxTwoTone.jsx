// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone'

export default {
  name: 'MedicineBoxTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxTwoToneSvg } },
      children
    )
};