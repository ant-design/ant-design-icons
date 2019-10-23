
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/twotone/WarningTwoTone';

export default {
  name: 'IconWarningTwoTone',
  displayName: 'WarningTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningTwoToneSvg } },
      children
    ),
};
