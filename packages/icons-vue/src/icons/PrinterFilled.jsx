// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled'

export default {
  name: 'PrinterFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PrinterFilledSvg } },
      children
    )
};