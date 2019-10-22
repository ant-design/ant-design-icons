// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled'

export default {
  name: 'BuildFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildFilledSvg } },
      children
    )
};