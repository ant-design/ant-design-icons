// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone'

export default {
  name: 'CopyrightTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightTwoToneSvg } },
      children
    )
};