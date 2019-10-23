
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/CloseSquareOutline';

export default {
  name: 'IconCloseSquare',
  displayName: 'CloseSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareOutlineSvg } },
      children
    ),
};
