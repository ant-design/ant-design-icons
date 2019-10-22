// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlusSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined'

export default {
  name: 'Plus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSvg } },
      children
    )
};