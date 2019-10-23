
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BarcodeOutlineSvg from '@ant-design/icons-svg/lib/outline/BarcodeOutline';

export default {
  name: 'IconBarcode',
  displayName: 'Barcode',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarcodeOutlineSvg } },
      children
    ),
};
