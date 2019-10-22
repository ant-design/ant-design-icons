// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone'

export default {
  name: 'CheckCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleTwoToneSvg } },
      children
    )
};