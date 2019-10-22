// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled'

export default {
  name: 'RightSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareFilledSvg } },
      children
    )
};