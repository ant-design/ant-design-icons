
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilterOutlineSvg from '@ant-design/icons-svg/lib/outline/FilterOutline';

export default {
  name: 'IconFilter',
  displayName: 'Filter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterOutlineSvg } },
      children
    ),
};
