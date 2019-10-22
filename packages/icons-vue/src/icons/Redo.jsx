// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedoSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined'

export default {
  name: 'Redo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedoSvg } },
      children
    )
};