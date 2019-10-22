// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled'

export default {
  name: 'FilterFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterFilledSvg } },
      children
    )
};