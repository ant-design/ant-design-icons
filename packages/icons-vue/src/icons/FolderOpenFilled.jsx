// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled'

export default {
  name: 'FolderOpenFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenFilledSvg } },
      children
    )
};