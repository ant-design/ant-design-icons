
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QrcodeOutlineSvg from '@ant-design/icons-svg/lib/outline/QrcodeOutline';

export default {
  name: 'IconQrcode',
  displayName: 'Qrcode',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QrcodeOutlineSvg } },
      children
    ),
};
