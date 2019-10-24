
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoneyCollectOutlineSvg from '@ant-design/icons-svg/lib/outline/MoneyCollectOutline';

export default {
  name: 'IconMoneyCollect',
  displayName: 'MoneyCollect',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoneyCollectOutlineSvg } },
      children
    ),
};
