// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled'

export default {
  name: 'UsbFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsbFilledSvg } },
      children
    )
};