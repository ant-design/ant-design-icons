// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import QuestionSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined'

export default {
  name: 'Question',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionSvg } },
      children
    )
};