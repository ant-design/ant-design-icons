// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone'

export default {
  name: 'PrinterTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PrinterTwoToneSvg } },
      children
    )
};