
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PrinterFillSvg from '@ant-design/icons-svg/lib/fill/PrinterFill';

export default {
  name: 'PrinterFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PrinterFillSvg } },
      children
    ),
};
