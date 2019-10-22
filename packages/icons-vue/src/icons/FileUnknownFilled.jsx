// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled'

export default {
  name: 'FileUnknownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileUnknownFilledSvg } },
      children
    )
};