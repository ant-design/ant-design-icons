
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/RightSquareOutline';

export default {
  name: 'IconRightSquare',
  displayName: 'RightSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareOutlineSvg } },
      children
    ),
};
