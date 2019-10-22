// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FundSvg from '@ant-design/icons-svg/lib/asn/FundOutlined'

export default {
  name: 'Fund',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundSvg } },
      children
    )
};