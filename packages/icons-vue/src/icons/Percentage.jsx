
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PercentageOutlineSvg from '@ant-design/icons-svg/lib/outline/PercentageOutline';

export default {
  name: 'IconPercentage',
  displayName: 'Percentage',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PercentageOutlineSvg } },
      children
    ),
};
