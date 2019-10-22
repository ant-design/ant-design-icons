// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled'

export default {
  name: 'BugFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugFilledSvg } },
      children
    )
};