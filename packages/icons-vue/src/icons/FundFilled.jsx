
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FundFillSvg from '@ant-design/icons-svg/lib/fill/FundFill';

export default {
  name: 'IconFundFilled',
  displayName: 'FundFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundFillSvg } },
      children
    ),
};
