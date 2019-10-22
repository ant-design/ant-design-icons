// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ProjectSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined'

export default {
  name: 'Project',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProjectSvg } },
      children
    )
};