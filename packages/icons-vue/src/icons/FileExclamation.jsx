// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileExclamationSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined'

export default {
  name: 'FileExclamation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExclamationSvg } },
      children
    )
};