// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled'

export default {
  name: 'EnvironmentFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentFilledSvg } },
      children
    )
};