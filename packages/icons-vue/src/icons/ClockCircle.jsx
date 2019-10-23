
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ClockCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/ClockCircleOutline';

export default {
  name: 'IconClockCircle',
  displayName: 'ClockCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClockCircleOutlineSvg } },
      children
    ),
};
