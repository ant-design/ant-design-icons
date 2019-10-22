
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SecurityScanTwoTone';

export default {
  name: 'SecurityScanTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SecurityScanTwoToneSvg } },
      children
    ),
};
