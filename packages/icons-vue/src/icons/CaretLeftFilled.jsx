// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled'

export default {
  name: 'CaretLeftFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretLeftFilledSvg } },
      children
    )
};