// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled'

export default {
  name: 'TwitterCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TwitterCircleFilledSvg } },
      children
    )
};