
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExcelOutlineSvg from '@ant-design/icons-svg/lib/outline/FileExcelOutline';

export default {
  name: 'FileExcel',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExcelOutlineSvg } },
      children
    ),
};
