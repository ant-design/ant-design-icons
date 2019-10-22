// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled'

export default {
  name: 'LeftCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleFilledSvg } },
      children
    )
};