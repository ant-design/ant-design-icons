
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TeamOutlineSvg from '@ant-design/icons-svg/lib/outline/TeamOutline';

export default {
  name: 'Team',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TeamOutlineSvg } },
      children
    ),
};
