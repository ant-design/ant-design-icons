
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderAddOutlineSvg from '@ant-design/icons-svg/lib/outline/FolderAddOutline';

export default {
  name: 'IconFolderAdd',
  displayName: 'FolderAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddOutlineSvg } },
      children
    ),
};
