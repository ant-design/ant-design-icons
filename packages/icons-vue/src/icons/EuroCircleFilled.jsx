// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled'

export default {
  name: 'EuroCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroCircleFilledSvg } },
      children
    )
};