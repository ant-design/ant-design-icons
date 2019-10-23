
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileSyncOutlineSvg from '@ant-design/icons-svg/lib/outline/FileSyncOutline';

export default {
  name: 'IconFileSync',
  displayName: 'FileSync',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileSyncOutlineSvg } },
      children
    ),
};
