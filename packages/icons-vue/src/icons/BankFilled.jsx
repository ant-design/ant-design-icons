
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BankFillSvg from '@ant-design/icons-svg/lib/fill/BankFill';

export default {
  name: 'BankFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BankFillSvg } },
      children
    ),
};
