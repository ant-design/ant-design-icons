// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled'

export default {
  name: 'SketchSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchSquareFilledSvg } },
      children
    )
};