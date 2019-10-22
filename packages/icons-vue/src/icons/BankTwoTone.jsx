
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BankTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BankTwoTone';

export default {
  name: 'BankTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BankTwoToneSvg } },
      children
    ),
};
