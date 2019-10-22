// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone'

export default {
  name: 'HomeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeTwoToneSvg } },
      children
    )
};