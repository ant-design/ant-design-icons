// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QuestionCircleSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined'

export default {
  name: 'QuestionCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleSvg } },
      children
    )
};