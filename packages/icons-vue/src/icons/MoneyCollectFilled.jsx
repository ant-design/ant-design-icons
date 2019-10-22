// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled'

export default {
  name: 'MoneyCollectFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoneyCollectFilledSvg } },
      children
    )
};