// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlidersSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined'

export default {
  name: 'Sliders',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersSvg } },
      children
    )
};