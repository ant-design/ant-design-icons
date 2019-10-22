// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled'

export default {
  name: 'QuestionCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleFilledSvg } },
      children
    )
};