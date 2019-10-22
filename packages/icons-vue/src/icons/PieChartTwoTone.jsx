
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PieChartTwoTone';

export default {
  name: 'PieChartTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PieChartTwoToneSvg } },
      children
    ),
};
