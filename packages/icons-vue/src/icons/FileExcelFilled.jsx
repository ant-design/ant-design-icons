// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled'

export default {
  name: 'FileExcelFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExcelFilledSvg } },
      children
    )
};