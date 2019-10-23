
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderOpenFillSvg from '@ant-design/icons-svg/lib/fill/FolderOpenFill';

export default {
  name: 'IconFolderOpenFilled',
  displayName: 'FolderOpenFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenFillSvg } },
      children
    ),
};
