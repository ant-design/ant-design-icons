
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RobotOutlineSvg from '@ant-design/icons-svg/lib/outline/RobotOutline';

export default {
  name: 'Robot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RobotOutlineSvg } },
      children
    ),
};
