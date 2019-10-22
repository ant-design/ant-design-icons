// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled'

export default {
  name: 'StepForwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepForwardFilledSvg } },
      children
    )
};