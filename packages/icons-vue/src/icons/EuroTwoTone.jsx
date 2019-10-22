// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone'

export default {
  name: 'EuroTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroTwoToneSvg } },
      children
    )
};