
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PrinterOutlineSvg from '@ant-design/icons-svg/lib/outline/PrinterOutline';

export default {
  name: 'IconPrinter',
  displayName: 'Printer',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PrinterOutlineSvg } },
      children
    ),
};
