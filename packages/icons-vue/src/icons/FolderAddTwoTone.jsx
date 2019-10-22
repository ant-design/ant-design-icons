// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderAddTwoTone'

export default {
  name: 'FolderAddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddTwoToneSvg } },
      children
    )
};