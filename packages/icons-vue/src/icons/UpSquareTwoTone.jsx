// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone'

export default {
  name: 'UpSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareTwoToneSvg } },
      children
    )
};