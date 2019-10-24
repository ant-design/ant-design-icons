
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProfileOutlineSvg from '@ant-design/icons-svg/lib/outline/ProfileOutline';

export default {
  name: 'IconProfile',
  displayName: 'Profile',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProfileOutlineSvg } },
      children
    ),
};
