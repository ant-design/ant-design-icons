// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled'

export default {
  name: 'FileAddFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileAddFilledSvg } },
      children
    )
};