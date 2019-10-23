
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BehanceSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/BehanceSquareOutline';

export default {
  name: 'IconBehanceSquare',
  displayName: 'BehanceSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceSquareOutlineSvg } },
      children
    ),
};
