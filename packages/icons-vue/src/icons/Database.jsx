// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DatabaseSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined'

export default {
  name: 'Database',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseSvg } },
      children
    )
};