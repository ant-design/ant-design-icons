// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileWordSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined'

export default {
  name: 'FileWord',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordSvg } },
      children
    )
};