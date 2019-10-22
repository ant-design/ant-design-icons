// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled'

export default {
  name: 'DollarCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DollarCircleFilledSvg } },
      children
    )
};