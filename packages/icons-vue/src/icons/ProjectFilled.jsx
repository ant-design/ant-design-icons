// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled'

export default {
  name: 'ProjectFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProjectFilledSvg } },
      children
    )
};