
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalendarOutlineSvg from '@ant-design/icons-svg/lib/outline/CalendarOutline';

export default {
  name: 'IconCalendar',
  displayName: 'Calendar',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalendarOutlineSvg } },
      children
    ),
};
