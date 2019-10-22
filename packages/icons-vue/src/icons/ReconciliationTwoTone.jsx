// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone'

export default {
  name: 'ReconciliationTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReconciliationTwoToneSvg } },
      children
    )
};