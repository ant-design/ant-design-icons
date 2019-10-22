// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled'

export default {
  name: 'PauseCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleFilledSvg } },
      children
    )
};