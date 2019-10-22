// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone'

export default {
  name: 'DownSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareTwoToneSvg } },
      children
    )
};