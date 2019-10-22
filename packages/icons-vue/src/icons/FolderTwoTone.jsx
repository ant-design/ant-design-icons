// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone'

export default {
  name: 'FolderTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderTwoToneSvg } },
      children
    )
};