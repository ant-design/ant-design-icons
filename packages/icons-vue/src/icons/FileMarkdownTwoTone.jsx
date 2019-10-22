// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone'

export default {
  name: 'FileMarkdownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileMarkdownTwoToneSvg } },
      children
    )
};