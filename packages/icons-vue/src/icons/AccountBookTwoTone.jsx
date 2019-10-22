
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/twotone/AccountBookTwoTone';

export default {
  name: 'AccountBookTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AccountBookTwoToneSvg } },
      children
    ),
};
