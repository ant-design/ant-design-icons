
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExcelTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileExcelTwoTone';

export default {
  name: 'IconFileExcelTwoTone',
  displayName: 'FileExcelTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileExcelTwoToneSvg } },
      children
    ),
};
