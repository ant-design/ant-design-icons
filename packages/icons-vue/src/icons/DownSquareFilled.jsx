// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled'

export default {
  name: 'DownSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareFilledSvg } },
      children
    )
};