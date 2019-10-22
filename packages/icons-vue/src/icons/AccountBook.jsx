// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AccountBookSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined'

export default {
  name: 'AccountBook',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookSvg } },
      children
    )
};