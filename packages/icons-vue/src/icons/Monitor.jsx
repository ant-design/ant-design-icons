
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MonitorOutlineSvg from '@ant-design/icons-svg/lib/outline/MonitorOutline';

export default {
  name: 'Monitor',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MonitorOutlineSvg } },
      children
    ),
};
