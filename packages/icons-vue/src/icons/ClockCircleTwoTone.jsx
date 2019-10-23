
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ClockCircleTwoTone';

export default {
  name: 'IconClockCircleTwoTone',
  displayName: 'ClockCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClockCircleTwoToneSvg } },
      children
    ),
};
