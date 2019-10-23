
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SearchOutlineSvg from '@ant-design/icons-svg/lib/outline/SearchOutline';

export default {
  name: 'IconSearch',
  displayName: 'Search',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SearchOutlineSvg } },
      children
    ),
};
