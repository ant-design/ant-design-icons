// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled'

export default {
  name: 'StepBackwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepBackwardFilledSvg } },
      children
    )
};