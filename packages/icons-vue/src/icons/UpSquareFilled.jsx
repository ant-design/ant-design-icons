// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled'

export default {
  name: 'UpSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareFilledSvg } },
      children
    )
};