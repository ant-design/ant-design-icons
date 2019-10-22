// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone'

export default {
  name: 'CopyTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyTwoToneSvg } },
      children
    )
};