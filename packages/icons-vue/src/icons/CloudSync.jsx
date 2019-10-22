// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudSyncSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined'

export default {
  name: 'CloudSync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudSyncSvg } },
      children
    )
};