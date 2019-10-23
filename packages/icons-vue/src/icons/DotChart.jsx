
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DotChartOutlineSvg from '@ant-design/icons-svg/lib/outline/DotChartOutline';

export default {
  name: 'IconDotChart',
  displayName: 'DotChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DotChartOutlineSvg } },
      children
    ),
};
