// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled'

export default {
  name: 'DingtalkCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingtalkCircleFilledSvg } },
      children
    )
};