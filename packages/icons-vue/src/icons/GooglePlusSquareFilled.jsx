// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled'

export default {
  name: 'GooglePlusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusSquareFilledSvg } },
      children
    )
};