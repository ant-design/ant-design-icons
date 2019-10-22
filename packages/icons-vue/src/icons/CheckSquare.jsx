
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/CheckSquareOutline';

export default {
  name: 'CheckSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareOutlineSvg } },
      children
    ),
};
