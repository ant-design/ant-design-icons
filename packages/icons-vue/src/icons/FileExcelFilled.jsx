// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';

export default {
  name: 'IconFileExcelFilled',
  displayName: 'FileExcelFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExcelFilledSvg } },
      children,
    ),
};