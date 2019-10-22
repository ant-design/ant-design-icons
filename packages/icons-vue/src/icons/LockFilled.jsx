// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled'

export default {
  name: 'LockFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LockFilledSvg } },
      children
    )
};