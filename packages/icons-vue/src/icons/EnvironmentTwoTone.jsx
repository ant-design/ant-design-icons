// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone'

export default {
  name: 'EnvironmentTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentTwoToneSvg } },
      children
    )
};