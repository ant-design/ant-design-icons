
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DribbbleSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/DribbbleSquareOutline';

export default {
  name: 'IconDribbbleSquare',
  displayName: 'DribbbleSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleSquareOutlineSvg } },
      children
    ),
};
