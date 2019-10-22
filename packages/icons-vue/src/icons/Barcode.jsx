// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BarcodeSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined'

export default {
  name: 'Barcode',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarcodeSvg } },
      children
    )
};