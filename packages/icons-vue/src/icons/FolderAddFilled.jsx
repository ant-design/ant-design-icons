
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderAddFillSvg from '@ant-design/icons-svg/lib/fill/FolderAddFill';

export default {
  name: 'IconFolderAddFilled',
  displayName: 'FolderAddFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddFillSvg } },
      children
    ),
};
