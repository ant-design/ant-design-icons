
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HourglassOutlineSvg from '@ant-design/icons-svg/lib/outline/HourglassOutline';

export default {
  name: 'Hourglass',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HourglassOutlineSvg } },
      children
    ),
};
