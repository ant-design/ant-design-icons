
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExclamationOutlineSvg from '@ant-design/icons-svg/lib/outline/FileExclamationOutline';

export default {
  name: 'FileExclamation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExclamationOutlineSvg } },
      children
    ),
};
