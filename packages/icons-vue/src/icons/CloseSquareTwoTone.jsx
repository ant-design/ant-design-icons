// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone'

export default {
  name: 'CloseSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareTwoToneSvg } },
      children
    )
};