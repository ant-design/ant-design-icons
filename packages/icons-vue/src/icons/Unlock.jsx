
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UnlockOutlineSvg from '@ant-design/icons-svg/lib/outline/UnlockOutline';

export default {
  name: 'IconUnlock',
  displayName: 'Unlock',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnlockOutlineSvg } },
      children
    ),
};
