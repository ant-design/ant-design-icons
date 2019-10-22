
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/MinusSquareOutline';

export default {
  name: 'MinusSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusSquareOutlineSvg } },
      children
    ),
};
