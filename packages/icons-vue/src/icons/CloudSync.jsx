
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudSyncOutlineSvg from '@ant-design/icons-svg/lib/outline/CloudSyncOutline';

export default {
  name: 'IconCloudSync',
  displayName: 'CloudSync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudSyncOutlineSvg } },
      children
    ),
};
