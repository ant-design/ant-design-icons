// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled'

export default {
  name: 'FileZipFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileZipFilledSvg } },
      children
    )
};