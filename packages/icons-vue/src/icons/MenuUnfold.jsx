
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MenuUnfoldOutlineSvg from '@ant-design/icons-svg/lib/outline/MenuUnfoldOutline';

export default {
  name: 'MenuUnfold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuUnfoldOutlineSvg } },
      children
    ),
};
