
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/LeftSquareOutline';

export default {
  name: 'IconLeftSquare',
  displayName: 'LeftSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSquareOutlineSvg } },
      children
    ),
};
