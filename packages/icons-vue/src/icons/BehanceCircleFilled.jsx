// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled'

export default {
  name: 'BehanceCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceCircleFilledSvg } },
      children
    )
};