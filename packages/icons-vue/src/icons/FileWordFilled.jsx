// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled'

export default {
  name: 'FileWordFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordFilledSvg } },
      children
    )
};