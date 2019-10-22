
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DashboardTwoTone';

export default {
  name: 'DashboardTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashboardTwoToneSvg } },
      children
    ),
};
