
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExclamationFillSvg from '@ant-design/icons-svg/lib/fill/FileExclamationFill';

export default {
  name: 'FileExclamationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExclamationFillSvg } },
      children
    ),
};
