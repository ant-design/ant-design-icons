
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PrinterTwoTone';

export default {
  name: 'IconPrinterTwoTone',
  displayName: 'PrinterTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PrinterTwoToneSvg } },
      children
    ),
};
