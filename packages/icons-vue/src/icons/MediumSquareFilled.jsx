// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled'

export default {
  name: 'MediumSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumSquareFilledSvg } },
      children
    )
};