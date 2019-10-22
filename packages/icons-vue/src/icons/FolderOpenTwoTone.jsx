// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone'

export default {
  name: 'FolderOpenTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenTwoToneSvg } },
      children
    )
};