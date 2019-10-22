// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone'

export default {
  name: 'FileImageTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageTwoToneSvg } },
      children
    )
};