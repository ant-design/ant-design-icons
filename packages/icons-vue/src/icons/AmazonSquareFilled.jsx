// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled'

export default {
  name: 'AmazonSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AmazonSquareFilledSvg } },
      children
    )
};