// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled'

export default {
  name: 'AlipaySquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipaySquareFilledSvg } },
      children
    )
};