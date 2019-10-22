// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled'

export default {
  name: 'FileExclamationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExclamationFilledSvg } },
      children
    )
};