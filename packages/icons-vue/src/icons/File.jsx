// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileSvg from '@ant-design/icons-svg/lib/asn/FileOutlined'

export default {
  name: 'File',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileSvg } },
      children
    )
};