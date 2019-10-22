
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoneyCollectFillSvg from '@ant-design/icons-svg/lib/fill/MoneyCollectFill';

export default {
  name: 'MoneyCollectFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoneyCollectFillSvg } },
      children
    ),
};
