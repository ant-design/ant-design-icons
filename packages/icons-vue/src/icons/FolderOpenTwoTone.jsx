
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FolderOpenTwoTone';

export default {
  name: 'FolderOpenTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderOpenTwoToneSvg } },
      children
    ),
};
