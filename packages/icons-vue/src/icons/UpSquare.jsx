
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/UpSquareOutline';

export default {
  name: 'UpSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareOutlineSvg } },
      children
    ),
};
