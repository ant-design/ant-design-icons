// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled'

export default {
  name: 'RightCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleFilledSvg } },
      children
    )
};