// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone'

export default {
  name: 'AccountBookTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookTwoToneSvg } },
      children
    )
};