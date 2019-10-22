// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone'

export default {
  name: 'FileZipTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileZipTwoToneSvg } },
      children
    )
};