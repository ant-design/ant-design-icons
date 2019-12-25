// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone';

export default {
  name: 'IconHourglassTwoTone',
  displayName: 'HourglassTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HourglassTwoToneSvg } },
      children,
    ),
};