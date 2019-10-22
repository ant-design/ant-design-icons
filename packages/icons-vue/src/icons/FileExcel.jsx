// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileExcelSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined'

export default {
  name: 'FileExcel',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExcelSvg } },
      children
    )
};