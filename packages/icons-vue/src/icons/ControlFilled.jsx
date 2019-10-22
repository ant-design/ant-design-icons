// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled'

export default {
  name: 'ControlFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ControlFilledSvg } },
      children
    )
};