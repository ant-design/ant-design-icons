// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled'

export default {
  name: 'MediumCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumCircleFilledSvg } },
      children
    )
};