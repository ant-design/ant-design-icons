// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled'

export default {
  name: 'YahooFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YahooFilledSvg } },
      children
    )
};