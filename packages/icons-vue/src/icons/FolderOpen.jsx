
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderOpenOutlineSvg from '@ant-design/icons-svg/lib/outline/FolderOpenOutline';

export default {
  name: 'IconFolderOpen',
  displayName: 'FolderOpen',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenOutlineSvg } },
      children
    ),
};
