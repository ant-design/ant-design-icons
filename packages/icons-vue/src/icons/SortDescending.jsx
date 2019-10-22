
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SortDescendingOutlineSvg from '@ant-design/icons-svg/lib/outline/SortDescendingOutline';

export default {
  name: 'SortDescending',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SortDescendingOutlineSvg } },
      children
    ),
};
