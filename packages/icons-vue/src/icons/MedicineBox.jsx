// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MedicineBoxSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined'

export default {
  name: 'MedicineBox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxSvg } },
      children
    )
};