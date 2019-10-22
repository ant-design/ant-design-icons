
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LockOutlineSvg from '@ant-design/icons-svg/lib/outline/LockOutline';

export default {
  name: 'Lock',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LockOutlineSvg } },
      children
    ),
};
