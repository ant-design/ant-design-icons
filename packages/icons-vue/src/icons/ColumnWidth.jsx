// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ColumnWidthSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined'

export default {
  name: 'ColumnWidth',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ColumnWidthSvg } },
      children
    )
};