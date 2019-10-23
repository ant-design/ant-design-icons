
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CalendarTwoTone';

export default {
  name: 'IconCalendarTwoTone',
  displayName: 'CalendarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalendarTwoToneSvg } },
      children
    ),
};
