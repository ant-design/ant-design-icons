// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone'

export default {
  name: 'FileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTwoToneSvg } },
      children
    )
};