// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';

export default {
  name: 'IconRobotFilled',
  displayName: 'RobotFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RobotFilledSvg } },
      children,
    ),
};