// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone'

export default {
  name: 'FilePdfTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfTwoToneSvg } },
      children
    )
};