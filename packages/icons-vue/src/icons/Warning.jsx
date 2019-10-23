
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WarningOutlineSvg from '@ant-design/icons-svg/lib/outline/WarningOutline';

export default {
  name: 'IconWarning',
  displayName: 'Warning',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningOutlineSvg } },
      children
    ),
};
