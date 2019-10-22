// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UsbSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined'

export default {
  name: 'Usb',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsbSvg } },
      children
    )
};