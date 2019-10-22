// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderOpenSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined'

export default {
  name: 'FolderOpen',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenSvg } },
      children
    )
};