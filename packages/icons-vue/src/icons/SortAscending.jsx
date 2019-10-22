
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SortAscendingOutlineSvg from '@ant-design/icons-svg/lib/outline/SortAscendingOutline';

export default {
  name: 'SortAscending',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SortAscendingOutlineSvg } },
      children
    ),
};
