
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EllipsisOutlineSvg from '@ant-design/icons-svg/lib/outline/EllipsisOutline';

export default {
  name: 'IconEllipsis',
  displayName: 'Ellipsis',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EllipsisOutlineSvg } },
      children
    ),
};
