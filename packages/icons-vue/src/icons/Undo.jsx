// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UndoSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined'

export default {
  name: 'Undo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UndoSvg } },
      children
    )
};