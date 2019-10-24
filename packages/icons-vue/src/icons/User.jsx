
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UserOutlineSvg from '@ant-design/icons-svg/lib/outline/UserOutline';

export default {
  name: 'IconUser',
  displayName: 'User',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserOutlineSvg } },
      children
    ),
};
