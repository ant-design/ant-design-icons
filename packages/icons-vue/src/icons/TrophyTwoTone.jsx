
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/twotone/TrophyTwoTone';

export default {
  name: 'TrophyTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophyTwoToneSvg } },
      children
    ),
};
