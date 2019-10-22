// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QrcodeSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined'

export default {
  name: 'Qrcode',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QrcodeSvg } },
      children
    )
};