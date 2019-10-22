// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RadiusBottomrightSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined'

export default {
  name: 'RadiusBottomright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusBottomrightSvg } },
      children
    )
};