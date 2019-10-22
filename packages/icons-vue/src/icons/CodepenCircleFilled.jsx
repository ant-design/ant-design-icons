// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodepenCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleFilled'

export default {
  name: 'CodepenCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenCircleFilledSvg } },
      children
    )
};