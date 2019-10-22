
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FolderTwoTone';

export default {
  name: 'FolderTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderTwoToneSvg } },
      children
    ),
};
