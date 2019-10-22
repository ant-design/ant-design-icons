// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled'

export default {
  name: 'FileTextFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTextFilledSvg } },
      children
    )
};