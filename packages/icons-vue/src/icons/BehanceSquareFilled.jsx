// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled'

export default {
  name: 'BehanceSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceSquareFilledSvg } },
      children
    )
};