// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled'

export default {
  name: 'SlidersFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersFilledSvg } },
      children
    )
};