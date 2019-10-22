// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled'

export default {
  name: 'GoogleSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleSquareFilledSvg } },
      children
    )
};