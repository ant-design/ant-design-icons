// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileSearchSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined'

export default {
  name: 'FileSearch',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileSearchSvg } },
      children
    )
};