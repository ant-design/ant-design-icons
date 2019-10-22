// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SketchSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined'

export default {
  name: 'Sketch',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchSvg } },
      children
    )
};