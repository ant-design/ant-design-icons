// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UnlockSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined'

export default {
  name: 'Unlock',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnlockSvg } },
      children
    )
};