
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MenuFoldOutlineSvg from '@ant-design/icons-svg/lib/outline/MenuFoldOutline';

export default {
  name: 'IconMenuFold',
  displayName: 'MenuFold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuFoldOutlineSvg } },
      children
    ),
};
