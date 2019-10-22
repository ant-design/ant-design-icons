// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InterationFilledSvg from '@ant-design/icons-svg/lib/asn/InterationFilled'

export default {
  name: 'InterationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InterationFilledSvg } },
      children
    )
};