// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone'

export default {
  name: 'SlidersTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersTwoToneSvg } },
      children
    )
};