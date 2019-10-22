// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VerticalAlignTopSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined'

export default {
  name: 'VerticalAlignTop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignTopSvg } },
      children
    )
};