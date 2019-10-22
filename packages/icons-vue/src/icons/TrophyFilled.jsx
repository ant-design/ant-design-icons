
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrophyFillSvg from '@ant-design/icons-svg/lib/fill/TrophyFill';

export default {
  name: 'TrophyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophyFillSvg } },
      children
    ),
};
