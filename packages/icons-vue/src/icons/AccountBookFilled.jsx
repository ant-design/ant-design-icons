
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AccountBookFillSvg from '@ant-design/icons-svg/lib/fill/AccountBookFill';

export default {
  name: 'AccountBookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookFillSvg } },
      children
    ),
};
