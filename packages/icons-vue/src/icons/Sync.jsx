// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SyncSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined'

export default {
  name: 'Sync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SyncSvg } },
      children
    )
};