
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoxPlotOutlineSvg from '@ant-design/icons-svg/lib/outline/BoxPlotOutline';

export default {
  name: 'BoxPlot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoxPlotOutlineSvg } },
      children
    ),
};
