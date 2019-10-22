// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled'

export default {
  name: 'CloseSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareFilledSvg } },
      children
    )
};