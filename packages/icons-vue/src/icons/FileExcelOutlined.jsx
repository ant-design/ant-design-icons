// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined';

export default {
  name: 'IconFileExcelOutlined',
  displayName: 'FileExcelOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExcelOutlinedSvg } },
      children,
    ),
};