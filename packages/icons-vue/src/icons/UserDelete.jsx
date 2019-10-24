
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UserDeleteOutlineSvg from '@ant-design/icons-svg/lib/outline/UserDeleteOutline';

export default {
  name: 'IconUserDelete',
  displayName: 'UserDelete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserDeleteOutlineSvg } },
      children
    ),
};
