// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone'

export default {
  name: 'FundTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundTwoToneSvg } },
      children
    )
};