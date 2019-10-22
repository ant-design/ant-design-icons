// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled'

export default {
  name: 'QqCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QqCircleFilledSvg } },
      children
    )
};