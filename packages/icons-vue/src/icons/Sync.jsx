
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SyncOutlineSvg from '@ant-design/icons-svg/lib/outline/SyncOutline';

export default {
  name: 'IconSync',
  displayName: 'Sync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SyncOutlineSvg } },
      children
    ),
};
