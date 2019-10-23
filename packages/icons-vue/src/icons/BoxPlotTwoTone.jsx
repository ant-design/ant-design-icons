
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BoxPlotTwoTone';

export default {
  name: 'IconBoxPlotTwoTone',
  displayName: 'BoxPlotTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoxPlotTwoToneSvg } },
      children
    ),
};
