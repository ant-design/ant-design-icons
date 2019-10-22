// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled'

export default {
  name: 'FileImageFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageFilledSvg } },
      children
    )
};