// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone'

export default {
  name: 'DownCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleTwoToneSvg } },
      children
    )
};