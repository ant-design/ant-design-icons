// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled'

export default {
  name: 'FolderAddFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddFilledSvg } },
      children
    )
};