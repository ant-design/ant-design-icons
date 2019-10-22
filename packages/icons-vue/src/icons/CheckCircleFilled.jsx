// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled'

export default {
  name: 'CheckCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleFilledSvg } },
      children
    )
};