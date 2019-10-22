// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone'

export default {
  name: 'PhoneTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneTwoToneSvg } },
      children
    )
};