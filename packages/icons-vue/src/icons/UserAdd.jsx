
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UserAddOutlineSvg from '@ant-design/icons-svg/lib/outline/UserAddOutline';

export default {
  name: 'IconUserAdd',
  displayName: 'UserAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UserAddOutlineSvg } },
      children
    ),
};
