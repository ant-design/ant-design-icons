
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeploymentUnitOutlineSvg from '@ant-design/icons-svg/lib/outline/DeploymentUnitOutline';

export default {
  name: 'IconDeploymentUnit',
  displayName: 'DeploymentUnit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeploymentUnitOutlineSvg } },
      children
    ),
};
