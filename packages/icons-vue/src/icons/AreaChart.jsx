
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AreaChartOutlineSvg from '@ant-design/icons-svg/lib/outline/AreaChartOutline';

export default {
  name: 'IconAreaChart',
  displayName: 'AreaChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AreaChartOutlineSvg } },
      children
    ),
};
