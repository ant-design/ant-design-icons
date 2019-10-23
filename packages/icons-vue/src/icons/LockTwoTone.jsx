
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LockTwoToneSvg from '@ant-design/icons-svg/lib/twotone/LockTwoTone';

export default {
  name: 'IconLockTwoTone',
  displayName: 'LockTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LockTwoToneSvg } },
      children
    ),
};
