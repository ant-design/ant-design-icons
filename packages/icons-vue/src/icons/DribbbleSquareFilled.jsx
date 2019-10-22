// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled'

export default {
  name: 'DribbbleSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleSquareFilledSvg } },
      children
    )
};