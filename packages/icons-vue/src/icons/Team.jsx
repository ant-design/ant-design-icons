// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TeamSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined'

export default {
  name: 'Team',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TeamSvg } },
      children
    )
};