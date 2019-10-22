// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled'

export default {
  name: 'FileMarkdownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileMarkdownFilledSvg } },
      children
    )
};