// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone'

export default {
  name: 'FileWordTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordTwoToneSvg } },
      children
    )
};