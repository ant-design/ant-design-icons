
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FundOutlineSvg from '@ant-design/icons-svg/lib/outline/FundOutline';

export default {
  name: 'IconFund',
  displayName: 'Fund',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundOutlineSvg } },
      children
    ),
};
