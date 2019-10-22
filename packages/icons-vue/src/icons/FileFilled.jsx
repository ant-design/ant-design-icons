// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled'

export default {
  name: 'FileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileFilledSvg } },
      children
    )
};