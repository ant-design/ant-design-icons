
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LoginOutlineSvg from '@ant-design/icons-svg/lib/outline/LoginOutline';

export default {
  name: 'IconLogin',
  displayName: 'Login',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LoginOutlineSvg } },
      children
    ),
};
