// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled'

export default {
  name: 'PlusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusCircleFilledSvg } },
      children
    )
};