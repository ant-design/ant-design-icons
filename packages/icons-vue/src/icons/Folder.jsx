// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined'

export default {
  name: 'Folder',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderSvg } },
      children
    )
};