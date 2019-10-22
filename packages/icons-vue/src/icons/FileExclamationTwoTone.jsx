
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileExclamationTwoTone';

export default {
  name: 'FileExclamationTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExclamationTwoToneSvg } },
      children
    ),
};
