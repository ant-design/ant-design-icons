// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled'

export default {
  name: 'RestFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RestFilledSvg } },
      children
    )
};