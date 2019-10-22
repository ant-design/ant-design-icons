// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled'

export default {
  name: 'TwitterSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TwitterSquareFilledSvg } },
      children
    )
};