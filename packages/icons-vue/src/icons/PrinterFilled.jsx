// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';

export default {
  name: 'IconPrinterFilled',
  displayName: 'PrinterFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PrinterFilledSvg } },
      children,
    ),
};