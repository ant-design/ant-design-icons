// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RollbackSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined'

export default {
  name: 'Rollback',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RollbackSvg } },
      children
    )
};