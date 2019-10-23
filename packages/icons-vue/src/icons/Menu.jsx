
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MenuOutlineSvg from '@ant-design/icons-svg/lib/outline/MenuOutline';

export default {
  name: 'IconMenu',
  displayName: 'Menu',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuOutlineSvg } },
      children
    ),
};
