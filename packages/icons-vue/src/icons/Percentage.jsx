// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PercentageSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined'

export default {
  name: 'Percentage',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PercentageSvg } },
      children
    )
};