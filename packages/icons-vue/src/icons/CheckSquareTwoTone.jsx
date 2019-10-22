// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone'

export default {
  name: 'CheckSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareTwoToneSvg } },
      children
    )
};