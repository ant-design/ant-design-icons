
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/PlusSquareOutline';

export default {
  name: 'IconPlusSquare',
  displayName: 'PlusSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSquareOutlineSvg } },
      children
    ),
};
