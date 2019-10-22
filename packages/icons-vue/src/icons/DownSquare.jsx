
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/DownSquareOutline';

export default {
  name: 'DownSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareOutlineSvg } },
      children
    ),
};
