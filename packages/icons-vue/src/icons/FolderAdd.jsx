// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderAddSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined'

export default {
  name: 'FolderAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddSvg } },
      children
    )
};