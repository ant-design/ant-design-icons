// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileImageSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined'

export default {
  name: 'FileImage',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageSvg } },
      children
    )
};