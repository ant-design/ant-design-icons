// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone'

export default {
  name: 'CloudTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudTwoToneSvg } },
      children
    )
};