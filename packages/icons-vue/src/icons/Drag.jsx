// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DragSvg from '@ant-design/icons-svg/lib/asn/DragOutlined'

export default {
  name: 'Drag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DragSvg } },
      children
    )
};