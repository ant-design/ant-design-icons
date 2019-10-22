// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone'

export default {
  name: 'FilePptTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptTwoToneSvg } },
      children
    )
};