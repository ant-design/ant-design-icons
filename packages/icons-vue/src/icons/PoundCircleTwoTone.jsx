// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone'

export default {
  name: 'PoundCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundCircleTwoToneSvg } },
      children
    )
};