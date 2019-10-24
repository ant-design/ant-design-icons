
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScheduleOutlineSvg from '@ant-design/icons-svg/lib/outline/ScheduleOutline';

export default {
  name: 'IconSchedule',
  displayName: 'Schedule',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScheduleOutlineSvg } },
      children
    ),
};
