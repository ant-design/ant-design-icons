// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled'

export default {
  name: 'FilePdfFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfFilledSvg } },
      children
    )
};