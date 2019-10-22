// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CarryOutSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined'

export default {
  name: 'CarryOut',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutSvg } },
      children
    )
};