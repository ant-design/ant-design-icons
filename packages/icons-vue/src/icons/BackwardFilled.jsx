// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled'

export default {
  name: 'BackwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BackwardFilledSvg } },
      children
    )
};