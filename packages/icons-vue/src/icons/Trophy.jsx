
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrophyOutlineSvg from '@ant-design/icons-svg/lib/outline/TrophyOutline';

export default {
  name: 'IconTrophy',
  displayName: 'Trophy',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophyOutlineSvg } },
      children
    ),
};
