// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileZipSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined'

export default {
  name: 'FileZip',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileZipSvg } },
      children
    )
};