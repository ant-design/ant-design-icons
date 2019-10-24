
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FolderAddTwoTone';

export default {
  name: 'IconFolderAddTwoTone',
  displayName: 'FolderAddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderAddTwoToneSvg } },
      children
    ),
};
