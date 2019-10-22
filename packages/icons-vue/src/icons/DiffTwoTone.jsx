// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone'

export default {
  name: 'DiffTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffTwoToneSvg } },
      children
    )
};