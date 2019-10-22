// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SolutionSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined'

export default {
  name: 'Solution',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SolutionSvg } },
      children
    )
};