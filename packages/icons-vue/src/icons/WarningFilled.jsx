
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WarningFillSvg from '@ant-design/icons-svg/lib/fill/WarningFill';

export default {
  name: 'IconWarningFilled',
  displayName: 'WarningFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningFillSvg } },
      children
    ),
};
