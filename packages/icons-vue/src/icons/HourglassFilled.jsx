
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HourglassFillSvg from '@ant-design/icons-svg/lib/fill/HourglassFill';

export default {
  name: 'IconHourglassFilled',
  displayName: 'HourglassFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HourglassFillSvg } },
      children
    ),
};
