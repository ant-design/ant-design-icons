// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone'

export default {
  name: 'CodeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeTwoToneSvg } },
      children
    )
};