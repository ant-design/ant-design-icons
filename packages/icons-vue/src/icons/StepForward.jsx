// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StepForwardSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined'

export default {
  name: 'StepForward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepForwardSvg } },
      children
    )
};