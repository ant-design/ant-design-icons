// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled'

export default {
  name: 'MinusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusCircleFilledSvg } },
      children
    )
};