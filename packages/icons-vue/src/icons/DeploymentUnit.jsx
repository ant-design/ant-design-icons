// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DeploymentUnitSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined'

export default {
  name: 'DeploymentUnit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeploymentUnitSvg } },
      children
    )
};