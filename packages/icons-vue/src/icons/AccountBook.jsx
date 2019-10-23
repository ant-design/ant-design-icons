
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AccountBookOutlineSvg from '@ant-design/icons-svg/lib/outline/AccountBookOutline';

export default {
  name: 'IconAccountBook',
  displayName: 'AccountBook',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookOutlineSvg } },
      children
    ),
};
