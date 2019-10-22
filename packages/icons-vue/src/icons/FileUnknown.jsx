// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileUnknownSvg from '@ant-design/icons-svg/lib/asn/FileUnknownOutlined'

export default {
  name: 'FileUnknown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileUnknownSvg } },
      children
    )
};