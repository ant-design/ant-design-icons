// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone'

export default {
  name: 'BugTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugTwoToneSvg } },
      children
    )
};