// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone'

export default {
  name: 'UnlockTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnlockTwoToneSvg } },
      children
    )
};