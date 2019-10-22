// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone'

export default {
  name: 'StopTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopTwoToneSvg } },
      children
    )
};