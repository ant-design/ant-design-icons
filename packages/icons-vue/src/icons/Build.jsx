// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BuildSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined'

export default {
  name: 'Build',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildSvg } },
      children
    )
};