// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled'

export default {
  name: 'MedicineBoxFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxFilledSvg } },
      children
    )
};