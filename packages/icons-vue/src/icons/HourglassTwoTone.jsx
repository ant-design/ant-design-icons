
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/twotone/HourglassTwoTone';

export default {
  name: 'HourglassTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HourglassTwoToneSvg } },
      children
    ),
};
