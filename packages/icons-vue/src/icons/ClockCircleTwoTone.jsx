// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone';

export default {
  name: 'IconClockCircleTwoTone',
  displayName: 'ClockCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ClockCircleTwoToneSvg } },
      children,
    ),
};