// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShakeSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined'

export default {
  name: 'Shake',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShakeSvg } },
      children
    )
};