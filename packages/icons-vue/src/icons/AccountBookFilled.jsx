// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled'

export default {
  name: 'AccountBookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookFilledSvg } },
      children
    )
};