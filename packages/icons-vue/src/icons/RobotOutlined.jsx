// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';

export default {
  name: 'IconRobotOutlined',
  displayName: 'RobotOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RobotOutlinedSvg } },
      children,
    ),
};