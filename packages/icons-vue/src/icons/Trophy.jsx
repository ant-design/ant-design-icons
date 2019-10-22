// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrophySvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined'

export default {
  name: 'Trophy',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophySvg } },
      children
    )
};