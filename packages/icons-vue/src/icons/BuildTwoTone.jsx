// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone'

export default {
  name: 'BuildTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildTwoToneSvg } },
      children
    )
};