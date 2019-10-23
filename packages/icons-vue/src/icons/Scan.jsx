
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScanOutlineSvg from '@ant-design/icons-svg/lib/outline/ScanOutline';

export default {
  name: 'IconScan',
  displayName: 'Scan',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScanOutlineSvg } },
      children
    ),
};
