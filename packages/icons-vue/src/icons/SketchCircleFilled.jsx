// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled'

export default {
  name: 'SketchCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchCircleFilledSvg } },
      children
    )
};