// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled'

export default {
  name: 'FolderFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderFilledSvg } },
      children
    )
};