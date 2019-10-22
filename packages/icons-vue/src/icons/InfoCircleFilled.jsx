// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled'

export default {
  name: 'InfoCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoCircleFilledSvg } },
      children
    )
};