// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ColumHeightSvg from '@ant-design/icons-svg/lib/asn/ColumHeightOutlined'

export default {
  name: 'ColumHeight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ColumHeightSvg } },
      children
    )
};