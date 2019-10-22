// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BehanceSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined'

export default {
  name: 'Behance',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceSvg } },
      children
    )
};