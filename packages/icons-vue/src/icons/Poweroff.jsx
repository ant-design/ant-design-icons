// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PoweroffSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined'

export default {
  name: 'Poweroff',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoweroffSvg } },
      children
    )
};