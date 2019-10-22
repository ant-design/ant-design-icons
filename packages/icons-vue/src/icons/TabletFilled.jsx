// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled'

export default {
  name: 'TabletFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TabletFilledSvg } },
      children
    )
};