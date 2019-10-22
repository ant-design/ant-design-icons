// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileSyncSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined'

export default {
  name: 'FileSync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileSyncSvg } },
      children
    )
};