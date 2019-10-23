
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlaySquareOutlineSvg from '@ant-design/icons-svg/lib/outline/PlaySquareOutline';

export default {
  name: 'IconPlaySquare',
  displayName: 'PlaySquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareOutlineSvg } },
      children
    ),
};
