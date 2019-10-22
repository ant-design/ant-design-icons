
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExcelFillSvg from '@ant-design/icons-svg/lib/fill/FileExcelFill';

export default {
  name: 'FileExcelFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExcelFillSvg } },
      children
    ),
};
