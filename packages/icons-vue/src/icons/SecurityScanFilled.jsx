
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SecurityScanFillSvg from '@ant-design/icons-svg/lib/fill/SecurityScanFill';

export default {
  name: 'SecurityScanFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SecurityScanFillSvg } },
      children
    ),
};
